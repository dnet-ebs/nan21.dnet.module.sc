/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PurchaseOrderLov_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"docNo", type:"string"},
		{name:"docDate", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"companyId", type:"string"},
		{name:"bpAccountId", type:"string"},
		{name:"bpartnerId", type:"string"},
		{name:"bpartner", type:"string"},
		{name:"bpartnerName", type:"string"},
		{name:"id", type:"string"},
		{name:"clientId", type:"string"},
		{name:"refid", type:"string"}
	]
});
