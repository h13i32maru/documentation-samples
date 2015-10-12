Ext.data.JsonP.GeoExt_tree_View({"tagname":"class","name":"GeoExt.tree.View","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"View.js","href":"View.html#GeoExt-tree-View"}],"aliases":{"widget":["gx_treeview"]},"alternateClassNames":[],"extends":"Ext.tree.View","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"createChild","tagname":"method","owner":"GeoExt.tree.View","id":"method-createChild","meta":{}},{"name":"getRowClass","tagname":"method","owner":"GeoExt.tree.View","id":"method-getRowClass","meta":{}},{"name":"initComponent","tagname":"method","owner":"GeoExt.tree.View","id":"method-initComponent","meta":{"private":true}},{"name":"onItem","tagname":"method","owner":"GeoExt.tree.View","id":"method-onItem","meta":{}},{"name":"onNodeRendered","tagname":"method","owner":"GeoExt.tree.View","id":"method-onNodeRendered","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.tree.View","short_doc":"This plugin provides basic tree - map synchronisation functionality for a\nTreeView. ...","component":false,"superclasses":["Ext.tree.View"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.tree.View<div class='subclass '><strong>GeoExt.tree.View</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/View.html#GeoExt-tree-View' target='_blank'>View.js</a></div></pre><div class='doc-contents'><p>This plugin provides basic tree - map synchronisation functionality for a\nTreeView.</p>\n\n<p>It creates a specialized instance of modify the nodes on the fly and adds\nevent listeners to the tree and the maps to get both in sync.</p>\n\n<p>Note that the plugin must be added to the tree view, not to the tree panel.\nFor example using viewConfig:</p>\n\n<pre><code>viewConfig: {\n    plugins: {\n        ptype: 'layertreeview'\n    }\n}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createChild' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.View'>GeoExt.tree.View</span><br/><a href='source/View.html#GeoExt-tree-View-method-createChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.View-method-createChild' class='name expandable'>createChild</a>( <span class='pre'>el, node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when an item was created. ...</div><div class='long'><p>Called when an item was created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getRowClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.View'>GeoExt.tree.View</span><br/><a href='source/View.html#GeoExt-tree-View-method-getRowClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.View-method-getRowClass' class='name expandable'>getRowClass</a>( <span class='pre'>record, rowIndex, rowParams, store</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowParams</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>store</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-initComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.View'>GeoExt.tree.View</span><br/><a href='source/View.html#GeoExt-tree-View-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.View-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.View'>GeoExt.tree.View</span><br/><a href='source/View.html#GeoExt-tree-View-method-onItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.View-method-onItem' class='name expandable'>onItem</a>( <span class='pre'>record, index, node, options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when an item updates or is added. ...</div><div class='long'><p>Called when an item updates or is added.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The model instance</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of the record/node</p>\n</div></li><li><span class='pre'>node</span> : HTMLElement<div class='sub-desc'><p>The node that has just been updated</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Options.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>createchild</li></ul></div></div></div><div id='method-onNodeRendered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.tree.View'>GeoExt.tree.View</span><br/><a href='source/View.html#GeoExt-tree-View-method-onNodeRendered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.tree.View-method-onNodeRendered' class='name expandable'>onNodeRendered</a>( <span class='pre'>node</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Called when a node is being rendered. ...</div><div class='long'><p>Called when a node is being rendered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Fires</h3><ul><li>createchild</li></ul></div></div></div></div></div></div></div>","meta":{}});