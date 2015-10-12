Ext.data.JsonP.GeoExt_data_FeatureStore({"tagname":"class","name":"GeoExt.data.FeatureStore","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"FeatureStore.js","href":"FeatureStore.html#GeoExt-data-FeatureStore"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":["GeoExt.data.reader.Feature"],"uses":[],"members":[{"name":"featureFilter","tagname":"cfg","owner":"GeoExt.data.FeatureStore","id":"cfg-featureFilter","meta":{}},{"name":"features","tagname":"cfg","owner":"GeoExt.data.FeatureStore","id":"cfg-features","meta":{}},{"name":"initDir","tagname":"cfg","owner":"GeoExt.data.FeatureStore","id":"cfg-initDir","meta":{}},{"name":"layer","tagname":"cfg","owner":"GeoExt.data.FeatureStore","id":"cfg-layer","meta":{}},{"name":"isLayerBinded","tagname":"property","owner":"GeoExt.data.FeatureStore","id":"property-isLayerBinded","meta":{"private":true}},{"name":"layer","tagname":"property","owner":"GeoExt.data.FeatureStore","id":"property-layer","meta":{}},{"name":"LAYER_TO_STORE","tagname":"property","owner":"GeoExt.data.FeatureStore","id":"static-property-LAYER_TO_STORE","meta":{"static":true}},{"name":"STORE_TO_LAYER","tagname":"property","owner":"GeoExt.data.FeatureStore","id":"static-property-STORE_TO_LAYER","meta":{"static":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-constructor","meta":{"private":true}},{"name":"addFeatures","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-addFeatures","meta":{}},{"name":"addFeaturesToLayer","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-addFeaturesToLayer","meta":{"private":true}},{"name":"bind","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-bind","meta":{}},{"name":"destroy","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-destroy","meta":{"private":true}},{"name":"getByFeature","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-getByFeature","meta":{}},{"name":"getById","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-getById","meta":{}},{"name":"loadRawData","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-loadRawData","meta":{}},{"name":"onAdd","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onAdd","meta":{"private":true}},{"name":"onClear","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onClear","meta":{"private":true}},{"name":"onFeatureModified","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onFeatureModified","meta":{"private":true}},{"name":"onFeaturesAdded","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onFeaturesAdded","meta":{"private":true}},{"name":"onFeaturesRemoved","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onFeaturesRemoved","meta":{"private":true}},{"name":"onLoad","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onLoad","meta":{"private":true}},{"name":"onRemove","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onRemove","meta":{"private":true}},{"name":"onStoreUpdate","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-onStoreUpdate","meta":{"private":true}},{"name":"removeFeatures","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-removeFeatures","meta":{}},{"name":"unbind","tagname":"method","owner":"GeoExt.data.FeatureStore","id":"method-unbind","meta":{}},{"name":"bind","tagname":"event","owner":"GeoExt.data.FeatureStore","id":"event-bind","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.FeatureStore","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>GeoExt.data.FeatureStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.data.reader.Feature' rel='GeoExt.data.reader.Feature' class='docClass'>GeoExt.data.reader.Feature</a></div><h4>Files</h4><div class='dependency'><a href='source/FeatureStore.html#GeoExt-data-FeatureStore' target='_blank'>FeatureStore.js</a></div></pre><div class='doc-contents'><p>A store that synchronizes a features array of an <code>OpenLayers.Layer.Vector</code>.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-featureFilter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-featureFilter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-featureFilter' class='name expandable'>featureFilter</a> : OpenLayers.Filter<span class=\"signature\"></span></div><div class='description'><div class='short'><p>This filter is evaluated before a feature record is added to the store.</p>\n</div><div class='long'><p>This filter is evaluated before a feature record is added to the store.</p>\n</div></div></div><div id='cfg-features' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-features' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-features' class='name expandable'>features</a> : OpenLayers.Layer/Array<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Features that will be added to the store (and the layer, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div><div class='long'><p>Features that will be added to the store (and the layer, depending on the\nvalue of the <code>initDir</code> option.</p>\n</div></div></div><div id='cfg-initDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-initDir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-initDir' class='name expandable'>initDir</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Bitfields specifying the direction to use for the initial sync between\nthe layer and the store, if set to 0 then no i...</div><div class='long'><p>Bitfields specifying the direction to use for the initial sync between\nthe layer and the store, if set to 0 then no initial sync is done.\nDefaults to <code><a href=\"#!/api/GeoExt.data.FeatureStore-static-property-LAYER_TO_STORE\" rel=\"GeoExt.data.FeatureStore-static-property-LAYER_TO_STORE\" class=\"docClass\">GeoExt.data.FeatureStore.LAYER_TO_STORE</a>|<a href=\"#!/api/GeoExt.data.FeatureStore-static-property-STORE_TO_LAYER\" rel=\"GeoExt.data.FeatureStore-static-property-STORE_TO_LAYER\" class=\"docClass\">GeoExt.data.FeatureStore.STORE_TO_LAYER</a></code></p>\n</div></div></div><div id='cfg-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-cfg-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-cfg-layer' class='name expandable'>layer</a> : OpenLayers.Layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>Layer that this store will be in sync with. ...</div><div class='long'><p>Layer that this store will be in sync with. If not provided, the\nstore will not be bound to a layer.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-isLayerBinded' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-property-isLayerBinded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-property-isLayerBinded' class='name expandable'>isLayerBinded</a> : OpenLayers.Layer.Vector<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>True when the vector layer is binded. ...</div><div class='long'><p>True when the vector layer is binded.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-layer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-property-layer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-property-layer' class='name expandable'>layer</a> : OpenLayers.Layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Vector layer that the store is synchronized with, if any.</p>\n</div><div class='long'><p>Vector layer that the store is synchronized with, if any.</p>\n</div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-LAYER_TO_STORE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-static-property-LAYER_TO_STORE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-static-property-LAYER_TO_STORE' class='name expandable'>LAYER_TO_STORE</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Bitfield specifying the layer to store sync direction. ...</div><div class='long'><p>Bitfield specifying the layer to store sync direction.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='static-property-STORE_TO_LAYER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-static-property-STORE_TO_LAYER' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-static-property-STORE_TO_LAYER' class='name expandable'>STORE_TO_LAYER</a> : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Bitfield specifying the store to layer sync direction. ...</div><div class='long'><p>Bitfield specifying the store to layer sync direction.</p>\n<p>Defaults to: <code>2</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.FeatureStore-method-constructor' class='name expandable'>GeoExt.data.FeatureStore</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Creation parameters</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a></span><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.data.FeatureStore-event-bind\" rel=\"GeoExt.data.FeatureStore-event-bind\" class=\"docClass\">bind</a></li><li>load</li></ul></div></div></div><div id='method-addFeatures' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-addFeatures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-addFeatures' class='name expandable'>addFeatures</a>( <span class='pre'>features</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience method to add features. ...</div><div class='long'><p>Convenience method to add features.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>features</span> : OpenLayers.Feature.Vector[]<div class='sub-desc'><p>The features to add.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>load</li></ul></div></div></div><div id='method-addFeaturesToLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-addFeaturesToLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-addFeaturesToLayer' class='name expandable'>addFeaturesToLayer</a>( <span class='pre'>records</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds the given records to the associated layer. ...</div><div class='long'><p>Adds the given records to the associated layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-bind' class='name expandable'>bind</a>( <span class='pre'>layer, options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Bind this store to a layer instance. ...</div><div class='long'><p>Bind this store to a layer instance. Once bound the store\nis synchronized with the layer and vice-versa.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : OpenLayers.Layer.Vector<div class='sub-desc'><p>The layer instance.</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.data.FeatureStore-event-bind\" rel=\"GeoExt.data.FeatureStore-event-bind\" class=\"docClass\">bind</a></li><li>load</li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Unbinds own listeners by calling unbind when being destroyed. ...</div><div class='long'><p>Unbinds own listeners by calling <a href=\"#!/api/GeoExt.data.FeatureStore-method-unbind\" rel=\"GeoExt.data.FeatureStore-method-unbind\" class=\"docClass\">unbind</a> when being destroyed.</p>\n</div></div></div><div id='method-getByFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-getByFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-getByFeature' class='name expandable'>getByFeature</a>( <span class='pre'>feature</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the record corresponding to a feature. ...</div><div class='long'><p>Returns the record corresponding to a feature.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : OpenLayers.Feature<div class='sub-desc'><p>An OpenLayers.Feature.Vector object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The model instance corresponding to a feature.</p>\n</div></li></ul></div></div></div><div id='method-getById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-getById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-getById' class='name expandable'>getById</a>( <span class='pre'>id</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the record corresponding to a feature id. ...</div><div class='long'><p>Returns the record corresponding to a feature id.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>An OpenLayers.Feature.Vector id string.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The model instance corresponding to the given id.</p>\n</div></li></ul></div></div></div><div id='method-loadRawData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-loadRawData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-loadRawData' class='name expandable'>loadRawData</a>( <span class='pre'>data, append</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>The event firing behaviour of Ext.4.1 is reestablished here. ...</div><div class='long'><p>The event firing behaviour of Ext.4.1 is reestablished here. See also:\n<a href=\"http://www.sencha.com/forum/%0Ashowthread.php?253596-beforeload-is-not-fired-by-loadRawData\">This discussion on the Sencha forum</a></p>\n\n<p>In version 4.2.1 this method reads</p>\n\n<pre><code>//...\nloadRawData : function(data, append) {\n    var me      = this,\n        result  = me.proxy.reader.read(data),\n        records = result.records;\n\n    if (result.success) {\n        me.totalCount = result.total;\n        me.loadRecords(records, append ? me.addRecordsOptions : undefined);\n    }\n},\n// ...\n</code></pre>\n\n<p>While the previous version 4.1.3 has also\nthe line <code>me.fireEvent('load', me, records, true);</code>:</p>\n\n<pre><code>// ...\nif (result.success) {\n    me.totalCount = result.total;\n    me.loadRecords(records, append ? me.addRecordsOptions : undefined);\n    me.fireEvent('load', me, records, true);\n}\n// ...\n</code></pre>\n\n<p>Our overwritten method has the code from 4.1.3, so that the #load-event\nis being fired.</p>\n\n<p>See also the source code of <a href=\"http://docs-origin.sencha.%0Acom/extjs/4.1.3/source/Store.html#Ext-data-Store-method-loadRawData\">version 4.1.3</a> and\nof <a href=\"http://docs-origin.sencha.com/extjs/4.2.1/source/%0AStore.html#Ext-data-Store-method-loadRawData\">version 4.2.1</a>.</p>\n\n<p>Since version 5.0.0 the method has changed at even more places so that\nwe check <a href=\"#!/api/GeoExt-property-isExt4\" rel=\"GeoExt-property-isExt4\" class=\"docClass\">GeoExt.isExt4</a> to decide which method we should patch. TODO: We\nshould remove the dependency on the load event as this patching really\ngets nasty.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>append</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>load</li></ul></div></div></div><div id='method-onAdd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onAdd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onAdd' class='name expandable'>onAdd</a>( <span class='pre'>store, records, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for a store's add event. ...</div><div class='long'><p>Handler for a store's add event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onClear' class='name expandable'>onClear</a>( <span class='pre'>store</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for a store's clear event. ...</div><div class='long'><p>Handler for a store's clear event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeatureModified' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeatureModified' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeatureModified' class='name expandable'>onFeatureModified</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for layer featuremodified event. ...</div><div class='long'><p>Handler for layer featuremodified event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeaturesAdded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeaturesAdded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeaturesAdded' class='name expandable'>onFeaturesAdded</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for layer featuresadded event. ...</div><div class='long'><p>Handler for layer featuresadded event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFeaturesRemoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onFeaturesRemoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onFeaturesRemoved' class='name expandable'>onFeaturesRemoved</a>( <span class='pre'>evt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for layer featuresremoved event. ...</div><div class='long'><p>Handler for layer featuresremoved event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evt</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onLoad' class='name expandable'>onLoad</a>( <span class='pre'>store, records, successful</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for a store's load event. ...</div><div class='long'><p>Handler for a store's load event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model[]<div class='sub-desc'>\n</div></li><li><span class='pre'>successful</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>store, records, index</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for a store's remove event. ...</div><div class='long'><p>Handler for a store's remove event. Depending on the ExtJS version this\nmethod will either receive a single record or an array of records.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The FeatureStore.</p>\n</div></li><li><span class='pre'>records</span> : Ext.data.Model/Ext.data.Model[]<div class='sub-desc'><p>A single record in\n    ExtJS 4 and an array of records in ExtJS 5.</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index at which the record(s) were removed.</p>\n</div></li></ul></div></div></div><div id='method-onStoreUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-onStoreUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-onStoreUpdate' class='name expandable'>onStoreUpdate</a>( <span class='pre'>store, record, operation, modifiedFieldNames</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Handler for a store's update event. ...</div><div class='long'><p>Handler for a store's update event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'>\n</div></li><li><span class='pre'>operation</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>modifiedFieldNames</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeFeatures' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-removeFeatures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-removeFeatures' class='name expandable'>removeFeatures</a>( <span class='pre'>features</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience method to remove features. ...</div><div class='long'><p>Convenience method to remove features.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>features</span> : OpenLayers.Feature.Vector[]<div class='sub-desc'><p>The features to remove.</p>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-method-unbind' class='name expandable'>unbind</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unbind this store from his layer instance. ...</div><div class='long'><p>Unbind this store from his layer instance.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.FeatureStore'>GeoExt.data.FeatureStore</span><br/><a href='source/FeatureStore.html#GeoExt-data-FeatureStore-event-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.FeatureStore-event-bind' class='name expandable'>bind</a>( <span class='pre'>store, layer, eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when the store is bound to a layer. ...</div><div class='long'><p>Fires when the store is bound to a layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : <a href=\"#!/api/GeoExt.data.FeatureStore\" rel=\"GeoExt.data.FeatureStore\" class=\"docClass\">GeoExt.data.FeatureStore</a><div class='sub-desc'>\n</div></li><li><span class='pre'>layer</span> : OpenLayers.Layer.Vector<div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});