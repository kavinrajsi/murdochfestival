import * as React from 'react';

export class Artists extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
              <h2 className='left l-section-title'>Artists</h2>

              <div className="grid--wrapper">
                <div className='col-sm-6'>
                  <div className="masterbar--button -center">
                    <a className="button--solid -fixedWidth" href="https://www.murdoch.edu.au/docs/default-source/share/sound-on-festival_schedule.pdf" target="_blank">Set times</a>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className="masterbar--button -center">
                    <a className="button--solid -fixedWidth" href="https://www.murdoch.edu.au/docs/default-source/share/sound-on-festival_map.pdf" target="_blank">Festival map</a>
                  </div>
                </div>
              </div>

               <div className='grid--wrapper'>
                 <div className='grid--artists col-xs-12'>

                   <div className='grid--artist col-xs-12 col-sm-8'>
                     <div className='grid--artist__image AlisonWonderland'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Alison Wonderland</h3>
                       <p>Australian electronic music royalty Alison Wonderland brings her vibrant pop-pulse and killer live show to RAC Arena for a one off performance. Don't miss her adrenaline-inducing set ft. tracks from hit album Awake.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image CosmosMidnight'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Cosmo's Midnight</h3>
                       <p>Sydney twins Cosmo and Patrick Liney come to Perth fresh off their debut national tour. Maestros of the mix-match, the dynamite duo are the starlight kings of electronic music.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image TkayMaidza'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Tkay Maidza</h3>
                       <p>Confidence, talent and attitude to match. Adelaide artist Tkay Maidza has forged an already-explosive career on the hip-hop scene as Australia’s rap and song-writing fireball queen of energy.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image SamPerry'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Sam Perry</h3>
                       <p>One-man orchestra and winner of The Voice Australia, Perth talent Sam Perry is set to ignite the stage with his distinctive vocal stylings and hypnotic musical style.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image ArnoFaraji'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Arno Faraji</h3>
                       <p>Arriving as 2017’s winner of Triple J Unearthed, local Perth talent Arno is leading the latest evolution of the ever-changing Australian hip-hop landscape.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image FlexMami'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>FlexMami</h3>
                       <p>Internet sensation, life coach legend and disc jockey extraordinaire, FlexMami will bring her DJ-ing prowess to Perth ft. Rap and R&amp;B track mixes.</p>
                     </div>
                   </div>                   
                 </div>
                 <div className="grid--artist grid--artist__info--more col-xs-12">
                  <p>Plus dj shann, the indigo project, and more</p>
                 </div>
               </div>
            </div>
        </div>;
    }
}
