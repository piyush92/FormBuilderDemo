Ext.define('DemoApp.model.FormField', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'uuid',
            type: 'string'
        }, {
            name: 'field',
            type: 'string'
        }, {
            name: 'datatype',
            type: 'string'
        }, {
            name: 'datatypeunit',
            type: 'string'
        }, {
            name: 'codedOptions',
            model: 'DemoApp.model.CodedOptions'
        }]
    }
});


