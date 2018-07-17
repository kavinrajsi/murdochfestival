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
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image CosmosMidnight'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Cosmo's Midnight</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit amet, consectetur adipiscing elit, sed do sed do eiusmod tempor incididunt ut labore et</p>
                     </div>
                   </div>

                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image SamPerry'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Sam Perry</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur sit amet, consectetur adipiscing elit, sed do sed do eiusmod tempor incididunt ut labore et</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-4'>
                     <div className='grid--artist__image TkayMaidza'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Tkay Maidza</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing sit amet, consectetur adipiscing elit, sed do sed do eiusmod tempor incididunt ut labore et</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image FlexMami'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Flex Mami</h3>
                       <p>Lorem ipsum dolor sitsit amet, consectetur sed do eiusmod tempor</p>
                     </div>
                   </div>
                   <div className='grid--artist col-xs-12 col-sm-2'>
                     <div className='grid--artist__image ArnoFaraji'> </div>
                     <div className='grid--artist__info'>
                       <h3 className='grid--artist__info--title'>Arno Faraji</h3>
                       <p>Lorem ipsum dolor sitsit amet, consectetur sed do eiusmod tempor</p>
                     </div>
                   </div>

                 </div>
               </div>
            </div>
        </div>;
    }
}
