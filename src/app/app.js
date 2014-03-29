Ext.application({
    name: 'DemoApp',

    views: ['Viewport', 'FormView', 'Preview', 'AddField'],
    controllers : ['controller'],
    models: ['Form', 'FormFields', 'FormField', 'CodedOptions'],
    stores: ['FormStore']
});
