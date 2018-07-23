using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using MurdochFestival.Data;
using MurdochFestival.Services;

namespace MurdochFestival
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.            
            services.AddDbContext<FormContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc();

            //register crm integration
            services.AddTransient<ICrmService, CrmService>();

            //compression
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression(options =>
            {
              options.MimeTypes = new[]
              {
                // Default
                "text/plain",
                "text/css",
                "application/javascript",
                "text/html",
                "application/xml",
                "text/xml",
                "application/json",
                "text/json",
                // Custom
                "image/svg+xml"
              };
              options.EnableForHttps = true;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, FormContext context)
        {
            //migrations
            context.Database.Migrate();

            //log our custom events
            //loggerFactory.AddProvider(new DatabaseLogProvider(
            //  (text, level) => level >= LogLevel.Information, context));
            loggerFactory.AddLog4Net("log4net.config", Configuration.GetSection("Log4net"));
            //loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            //loggerFactory.AddDebug();
              
              if (env.IsDevelopment())
              {
                  app.UseDeveloperExceptionPage();
                  app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                  {
                      HotModuleReplacement = true,
                      ReactHotModuleReplacement = true
                  });

                  app.UseStaticFiles();
              }
              else
              {
                  app.UseExceptionHandler("/Home/Error");
                  app.UseResponseCompression();

                  //todo: add middleware/rewrite?
                  
                  //tell the browser to cache static files
                  app.UseStaticFiles(new StaticFileOptions
                  {
                    OnPrepareResponse = ctx =>
                    {
                      const int durationInSeconds = 60 * 60 * 24 * 7; //cache for 1 week
                      ctx.Context.Response.Headers[HeaderNames.CacheControl] = "public,max-age=" + durationInSeconds;
                    }
                  });
              }
              
              app.UseMvc(routes =>
              {
                  routes.MapRoute(
                      name: "default",
                      template: "{controller=Home}/{action=Index}/{id?}");

                  routes.MapSpaFallbackRoute(
                      name: "spa-fallback",
                      defaults: new { controller = "Home", action = "Index" });
              });

            //initilise the database
            DbInitialiser.Initialise(context);
        }
    }
}
