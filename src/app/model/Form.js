Ext.define('DemoApp.model.Form', {
    extend: 'Ext.data.Model',
    config:{
        fields: ['id', {
            name : 'Name', 
            type :'string'
        }, {
            name: 'encounter', 
            type: 'string'
        }, {
            name: 'fields',
            model: 'DemoApp.model.FormFields'
        }]
    }
});