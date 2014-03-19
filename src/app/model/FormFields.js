Ext.define('DemoApp.model.FormFields', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'patients',
            model: 'DemoApp.model.FormField'
        }]
    }
});
