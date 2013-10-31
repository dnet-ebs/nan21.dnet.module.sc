/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseOrders_Lov" , {
	extend: "dnet.core.lov.AbstractCombo",
	alias: "widget.sc_PurchaseOrders_Lov",
	displayField: "docNo",
	listConfig: {
		getInnerTpl: function() {
			return '<span>{docNo}, {[ Ext.util.Format.date(values.docDate,Dnet.DATE_FORMAT)  ]}, {bpartnerName}</span>';
		},
		width:400, maxHeight:100
	},
	_editDialog_: {
		name: "PurchaseOrder_Ui",
		bundle: Dnet.bundle.sc
	},
	recordModel: Dnet.ns.sc + "PurchaseOrderLov_Ds"
});
