Ext.application({
    name: 'DemoApp',

    views: ['Viewport', 'FormView', 'Preview'],
    controllers : ['controller'],
    models: ['Form', 'FormFields', 'FormField', 'CodedOptions'],
    stores: ['FormStore']
});
