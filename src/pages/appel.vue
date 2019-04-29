<template>
    <f7-page id="appelid">
          <!-- Top Navbar -->
    <f7-navbar  >
       <f7-nav-left>
            
         <f7-icon ios="f7:phone" aurora="f7:phone" md="material:phone"></f7-icon>
   
      </f7-nav-left>
       <f7-nav-title  large="true">Elisabeth</f7-nav-title>  
       
   
</f7-navbar>
   <p>Demande...</p>
        <f7-fab position="center-bottom" slot="fixed" color="red" class="" @click="$f7router.back()">
         <f7-icon ios="f7:phone" aurora="f7:phone" md="material:phone"></f7-icon>
        </f7-fab>  
        
    </f7-page>
</template>
<style>
#appelid{
    background-image: url(../img/img_avatar2.png);
    background-repeat: no-repeat;
    background-attachment:fixed;
}
</style>

