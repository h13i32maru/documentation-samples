Ext.data.JsonP.GeoExt_Lang({"tagname":"class","name":"GeoExt.Lang","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true,"singleton":true},"files":[{"filename":"Lang.js","href":"Lang.html#GeoExt-Lang"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.util.Observable","mixins":[],"requires":["GeoExt.Version"],"uses":[],"members":[{"name":"locale","tagname":"cfg","owner":"GeoExt.Lang","id":"cfg-locale","meta":{}},{"name":"dict","tagname":"property","owner":"GeoExt.Lang","id":"property-dict","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"GeoExt.Lang","id":"method-constructor","meta":{"private":true}},{"name":"add","tagname":"method","owner":"GeoExt.Lang","id":"method-add","meta":{}},{"name":"set","tagname":"method","owner":"GeoExt.Lang","id":"method-set","meta":{}},{"name":"localize","tagname":"event","owner":"GeoExt.Lang","id":"event-localize","meta":{}}],"code_type":"ext_define","singleton":true,"id":"class-GeoExt.Lang","short_doc":"The GeoExt.Lang singleton is created when the library is loaded. ...","component":false,"superclasses":["Ext.util.Observable"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Observable<div class='subclass '><strong>GeoExt.Lang</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/Lang.html#GeoExt-Lang' target='_blank'>Lang.js</a></div></pre><div class='doc-contents'><p>The <a href=\"#!/api/GeoExt.Lang\" rel=\"GeoExt.Lang\" class=\"docClass\">GeoExt.Lang</a> singleton is created when the library is loaded.\nInclude all relevant language files after this file in your build.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-locale' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-cfg-locale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Lang-cfg-locale' class='name expandable'>locale</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The current language tag. ...</div><div class='long'><p>The current language tag.  Use <code><a href=\"#!/api/GeoExt.Lang-method-set\" rel=\"GeoExt.Lang-method-set\" class=\"docClass\">set</a></code> to set the locale. Defaults\nto the browser language where available.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dict' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-property-dict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Lang-property-dict' class='name expandable'>dict</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Dictionary of string lookups per language.</p>\n</div><div class='long'><p>Dictionary of string lookups per language.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.Lang-method-constructor' class='name expandable'>GeoExt.Lang</a>( <span class='pre'></span> ) : <a href=\"#!/api/GeoExt.Lang\" rel=\"GeoExt.Lang\" class=\"docClass\">GeoExt.Lang</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Construct the Lang singleton. ...</div><div class='long'><p>Construct the Lang singleton.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.Lang\" rel=\"GeoExt.Lang\" class=\"docClass\">GeoExt.Lang</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Lang-method-add' class='name expandable'>add</a>( <span class='pre'>locale, lookup</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add translation strings to the dictionary. ...</div><div class='long'><p>Add translation strings to the dictionary.  This method can be called\nmultiple times with the same language tag (locale argument) to extend\na single dictionary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locale</span> : String<div class='sub-desc'><p>A language tag that follows the \"en-CA\"\n    convention (http://www.ietf.org/rfc/rfc3066.txt).</p>\n</div></li><li><span class='pre'>lookup</span> : Object<div class='sub-desc'><p>An object with properties that are dot\n    delimited names of objects with localizable strings (e.g.\n    \"GeoExt.VectorLegend.prototype\").  The values for these properties\n    are objects that will be used to extend the target objects with\n    localized strings (e.g. {untitledPrefix: \"Untitiled \"})</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.Lang-event-localize\" rel=\"GeoExt.Lang-event-localize\" class=\"docClass\">localize</a></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Lang-method-set' class='name expandable'>set</a>( <span class='pre'>locale</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the language for all GeoExt components. ...</div><div class='long'><p>Set the language for all GeoExt components.  This will use any localized\nstrings in the dictionary (set with the <code><a href=\"#!/api/GeoExt.Lang-method-add\" rel=\"GeoExt.Lang-method-add\" class=\"docClass\">add</a></code> method) that\ncorrespond to the complete matching language tag or any \"higher order\"\ntag (e.g. setting \"en-CA\" will use strings from the \"en\" dictionary if\nmatching strings are not found in the \"en-CA\" dictionary).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locale</span> : String<div class='sub-desc'><p>Language identifier tag following recommendations\n    at http://www.ietf.org/rfc/rfc3066.txt.</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/GeoExt.Lang-event-localize\" rel=\"GeoExt.Lang-event-localize\" class=\"docClass\">localize</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-localize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.Lang'>GeoExt.Lang</span><br/><a href='source/Lang.html#GeoExt-Lang-event-localize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.Lang-event-localize' class='name expandable'>localize</a>( <span class='pre'>eOpts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Fires when localized strings are set. ...</div><div class='long'><p>Fires when localized strings are set.  Listeners will receive a\nsingle <code>locale</code> event with the language tag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});