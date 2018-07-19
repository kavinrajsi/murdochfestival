import * as React from 'react';

export class Artists extends React.Component<{}, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
              <h2 className='left l-section-title'>Artists</h2>
               <div className='grid--wrapper'>
                 <div className='grid--artists col-xs-12'>

                   <div className='grid--artist col-xs-12 col-sm-8'>
                     <div className='grid--artist__image AlisonWonderland'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Alison Wonderland</h3>
                       <p>She can sing, produce and DJ – Sydney-born, LA-based artist Alison Wonderland is making huge waves across the Australian dance scene and the music scene worldwide.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image CosmosMidnight'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Cosmo's Midnight</h3>
                       <p>Sydney twins Cosmo and Patrick Liney have combined forces to create their catchy electronic sounds sprinkled with elements of Pop and RnB.</p>
                     </div>
                   </div>

                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image SamPerry'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Sam Perry</h3>
                       <p>2018 winner of The Voice Australia, Perth talent Sam Perry will have you in awe of his distinctive vocal stylings and innovative musical style.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image TkayMaidza'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Tkay Maidza</h3>
                       <p>With confidence, talent and attitude to match, Adelaide artist Tkay Maidza has forged an already-explosive career on the hip-hop scene.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image FlexMami'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Flex Mami</h3>
                       <p>This multi-talented Australian has proven herself across multiple platforms including TV and radio, but is best known for her DJ-ing prowess and Rap and R&amp;B track mixes.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image ArnoFaraji'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Arno Faraji</h3>
                       <p>17-year-old Arno has already set high standards when it comes to his hip-hop/indie fusions, proving this as Triple J’s 2017 Unearthed winner. </p>
                     </div>
                   </div>

                 </div>
               </div>
            </div>
        </div>;
    }
}
