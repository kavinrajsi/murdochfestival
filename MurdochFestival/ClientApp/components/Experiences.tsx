import * as React from 'react';

export class Experiences extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
              <h2 className='left l-section-title'>Experiences</h2>
               <div className='list--wrapper'>
                 <div className='list--experiences'>

                  <div className='list--experience__info with--image col-xs-12 col-sm-12'>
                    <div className='list--experience__image create-the-life-youwant'> </div>
                    <div>
                      <h3 className='list--experience__info--title'>Create the life you want</h3>
                      <p>It's easy to see people at the top and wonder - how the hell did they get there? In this super rare opportunity, we'll hang out with our headliners over an intimate chat where we'll get to know their stories and discover a few strategies for dealing with life, exams, and everything in between, so you can start building a life that excites you.</p>
                      </div>
                  </div>

                  <div className='list--experience__info with--image col-xs-12 col-sm-12'>
                    <div className='list--experience__image future-beats-experiences'> </div>
                    <div>
                      <h3 className='list--experience__info--title'>Future beats experiences</h3>
                      <p>What does the best version of your life look like? In this immersive music experience we'll use the power of sound to unlock your mind and take you on a journey into the future. With the arena speakers cranked to the max, you'll feel music in a whole new way and leave feeling one step closer to your dreams.</p>
                    </div>
                  </div>

                  <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Glitter bar</h3>
                       <p>Add glam to your festival experience! Bring out your inner sparkle with some free glitter and face paint.</p>
                     </div>
                   </div>

                  <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Walter</h3>
                       <p>Put your free-thinking skills to the test with Walter, the intelligent, interactive cube. Take on the Ultimate Walter Challenge to win some awesome prizes!</p>
                     </div>
                   </div>

                   <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Photo Booth</h3>
                       <p>The perfect opportunity to create a lasting memory of the day with you and your mates.</p>
                     </div>
                   </div>

                   <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Gaming Lounge</h3>
                       <p>A space for you and your mates to enjoy some friendly competition with a range of arcade games and activities.</p>
                     </div>
                   </div>

                   <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Bicycle Powered Milkshakes</h3>
                       <p>It's all in the name! There's never been a more entertaining way to create a delicious drink… </p>
                     </div>
                   </div>

                   <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Chill Out Space</h3>
                       <p>A space designed for you to escape the action packed day to relax, recharge and have a chat. Friendly staff will also be on hand to answer any questions. </p>
                     </div>
                   </div>

                   <div className='list--experience col-xs-12'>
                     <div className='list--experience__info'>
                       <h3 className='list--experience__info--title'>Parents' Lounge </h3>
                       <p>Just because the kids get to have fun, doesn't mean the parents can't too. There will be a dedicated parent zone available. </p>
                     </div>
                   </div>

                 </div>
               </div>

              {/* <div className="button">
               <a href="#" className="button--out__more">More</a>
              </div> */}


            </div>
        </div>;
    }
}
