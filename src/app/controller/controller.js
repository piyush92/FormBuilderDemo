/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


Ext.define('DemoApp.controller.controller', {
    extend: 'Ext.app.Controller',
    config: {
        
        refs: {
            formlist: '#formlist',
            addForm: '#addForm',
            backToList: '#backToList',
            formFields: '#formFields',
            previewFormTitleBar : '#previewFormTitleBar',
            fieldContainer: '#fieldContainer'
        },
        
        control: {
            formlist: {
                itemtap: 'onItemTap'
            }, 
            addForm: {
                tap: 'addForm'
            },
            backToList: {
                tap: 'goBackToList'
            }
        }
    },

    goBackToList: function(){
        Ext.getCmp('mainView').setActiveItem(0);
    },

    openFormPreview: function(item) {
        Ext.getCmp('mainView').setActiveItem(2);
        Ext.getCmp('previewFormTitleBar').setTitle(item.Name + ' Form');
        container = Ext.getCmp('fieldContainer');
        container.removeAll();
        for(i=0;i<item.fields.length;i++) {
            var f = item.fields[i];
            console.log(f);
            container.add(this.getComponentForField(f));
        }
    },

    getComponentForField: function( f ) {
        var component = null;
        if(f.datatype == "numeric") {
            component = Ext.create('Ext.field.Number', {
                label: f.field,
                autoComplete: true,
                autoCorrect: true
            });
        } else if(f.datatype == "text") {
            component = Ext.create('Ext.field.Text', {
                label: f.field,
                autoComplete: true,
                autoCorrect: true
            });
        } else if(f.datatype == "textarea") {
            component = Ext.create('Ext.field.TextArea', {
                label: f.field,
                maxRows: 3
            });
        } else if(f.datatype == "boolean") {
            component = Ext.create('Ext.field.Checkbox', {
                label: f.field
            });
        } else if(f.datatype == "coded") {
            component = Ext.create('Ext.field.Select', {
                label: f.field,
                options: f.codedOptions
            });
        } 
        return component;
    },

    addForm: function() {
        Ext.getCmp('mainView').setActiveItem(1);
        Ext.getCmp('formFields').setStore(null);
    },
    editForm: function(record) {
        //  console.log('tapped button');
        //   console.log(record);
        this.addForm();
        var fieldList = Ext.getCmp('formFields');
        fieldList.setStore(new Ext.data.Store({
            requires: 'DemoApp.model.FormField',
            model: 'DemoApp.model.FormField',
            data: record.fields
               
        }))
    },
    //on entry point for application, give control to Util.getViews()
    launch: function () {
        Ext.create('Ext.Container', {
            id: 'mainView',
            fullscreen: true,
            layout: 'card',
            items: [{
                xclass: 'DemoApp.view.Viewport'
            }, {
                xclass: 'DemoApp.view.FormView'
            }, {
                xclass: 'DemoApp.view.Preview'
            }]
        })
        Ext.getCmp('mainView').setActiveItem(0);
    },
    onItemTap: function(item, idx, target, record , evt,eOpts) {
    
        // gets the item you tapped
        var tappedItem = evt.getTarget();
        console.log(record.getData());
        if (evt.getTarget('.edit')){
            this.editForm(record.getData());
           
        }
        if (evt.getTarget('.preview')){
         
            this.openFormPreview(record.getData());
        }
        
    }
})