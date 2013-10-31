/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PurchaseInvoiceLineTax_Ds", {
	extend: 'Ext.data.Model',
	
	fields: [
		{name:"baseAmount", type:"float", useNull:true},
		{name:"taxAmount", type:"float", useNull:true},
		{name:"baseAmountLoc", type:"float", useNull:true},
		{name:"taxAmountLoc", type:"float", useNull:true},
		{name:"lineId", type:"string"},
		{name:"taxId", type:"string"},
		{name:"tax", type:"string"},
		{name:"id", type:"string"},
		{name:"clientId", type:"string"},
		{name:"createdAt", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"modifiedAt", type:"date", dateFormat:Dnet.MODEL_DATE_FORMAT},
		{name:"createdBy", type:"string"},
		{name:"modifiedBy", type:"string"},
		{name:"notes", type:"string"},
		{name:"active", type:"boolean"},
		{name:"version", type:"int", useNull:true},
		{name:"refid", type:"string"},
		{name:"entityAlias", type:"string"},
		{name:"entityFqn", type:"string"}
	]
});
