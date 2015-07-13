Ext.define('TutorialApp.view.main.List', {
    extend: 'Ext.Panel',
    xtype: 'mainlist',

    requires: [
        'TutorialApp.view.login.LoginController',
        'Ext.form.Panel'
    ],

   
    title: 'List----',
    

    //items: {
       // xtype: 'form',
      //  reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        },  {
            xtype: 'displayfield',
            //hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        
  //  }
});