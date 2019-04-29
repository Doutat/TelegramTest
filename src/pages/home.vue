<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" >
       <f7-nav-left>
            
          <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
   
      </f7-nav-left>
       <f7-nav-title sliding>TelegramTest</f7-nav-title>  
        <f7-nav-right>
             <f7-link class="searchbar-enable" data-searchbar=".searchbar-demo" icon-ios="f7:search" icon-aurora="f7:search" icon-md="material:search"></f7-link>
          </f7-nav-right>
          <f7-searchbar
              class="searchbar-demo"
              expandable
              search-container=".search-list"
              search-in=".item-title"
             
            >  
            </f7-searchbar>  
     
         
</f7-navbar>


    <!-- Page content-->
   <f7-panel left cover theme-light>
                  <f7-view>
                    <f7-page>
                      
                        <f7-list acordion-list >
                           <img src="../img/beach.jpg" width="50px" >
                           <f7-list-item accordion-item title="Doutat Willy">
                            
                            <div>+237 693626616</div>

                              <f7-accordion-content>
                                <f7-list>
                                  
                                 <f7-list-item title="Doutat Willy"><img slot="media" src="../img/beach.jpg" width="30px" > </f7-list-item> 
                                  <f7-list-item title="Ajouter un contact"> <f7-icon slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon></f7-list-item>
                                </f7-list>
                              </f7-accordion-content>
                            </f7-list-item> 

                          </f7-list>
                        
                      

                      <f7-list>
                        <f7-list-item link="#" title="John Doe" no-chevron="true" >
                          <f7-icon slot="media" ios="f7:add" aurora="f7:add" md="material:add"></f7-icon>
                        </f7-list-item>
                        <f7-list-item link="#" title="+712 90 33 44 55"  no-chevron="true">
                        <f7-icon slot="media" ios="f7:person_round" aurora="f7:person_round" md="material:person_round"></f7-icon>
                        </f7-list-item>
                       
                        <f7-list-item link="#" title="john@doe"  no-chevron="true">
                          <f7-icon slot="media" ios="f7:shopping_cart" aurora="f7:shopping_cart" md="material:shopping_cart"></f7-icon>
                        </f7-list-item>
                        <f7-list-item link="#" title="john@framework7"  no-chevron="true">
                          <f7-icon slot="media" ios="f7:tune_fill" aurora="f7:tune_fill" md="material:tune_fill"></f7-icon>
                        </f7-list-item>
                        <f7-list-item link="#" title="john@framework7"  no-chevron="true">
                          <f7-icon slot="media" ios="f7:persons_round" aurora="f7:persons_round" md="material:persons_round"></f7-icon>
                        </f7-list-item>
                      </f7-list>





                    </f7-page>
                  </f7-view>
              </f7-panel>




<!-- Content -->


 <f7-list class="search-list searchbar-found" media-list>
    <f7-list-item
    link="/conversation/"
    title="Elisabeth"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/img_avatar2.png" width="50" alt="">
   </f7-list-item>
      
  <f7-list-item
    link="/conversation/"
  
    title="Jean"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/img_avatar.png" width="50" alt="">
   </f7-list-item>

   <f7-list-item
    link="#"
    title= "Paul"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
    
   >
  <img slot="media" src="../img/beach.jpg" width="50" alt="">
  

   </f7-list-item>

   <f7-list-item
    link="#"
    title="Henry"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
  
   >
  <img slot="media" src="../img/monkey.jpg" width="50" alt="">
   </f7-list-item>

    <f7-list-item
    link="#"
    title="Marie"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/img_avatar2.png" width="50" alt="">
   </f7-list-item>
    <f7-list-item
    link="#"
    title="Ribal"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/f7-icon.png" width="50" alt="">
   </f7-list-item>
    <f7-list-item
    link="#"
    title="Henry"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
  
   >
  <img slot="media" src="../img/monkey.jpg" width="50" alt="">
   </f7-list-item>
    <f7-list-item
    link="#"
    title="Marie"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/img_avatar2.png" width="50" alt="">
   </f7-list-item>
    <f7-list-item
    link="#"
    title="Ribal"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
   >
  <img slot="media" src="../img/f7-icon.png" width="50" alt="">
   </f7-list-item>
    <f7-list-item
    link="#"
    title="Henry"
    after="17:14"
    subtitle="Mon test de..." 
    no-chevron="true"
  
   >
  <img slot="media" src="../img/monkey.jpg" width="50" alt="">
   </f7-list-item>
  </f7-list>




<!-- FAB -->    


  <f7-fab position="right-bottom" slot="fixed" color="blue">
    <f7-icon ios="f7:edit" aurora="f7:edit" md="material:edit"></f7-icon>
    <f7-icon ios="f7:close" aurora="f7:close" md="material:close"></f7-icon>
  </f7-fab>  

  </f7-page>
</template>