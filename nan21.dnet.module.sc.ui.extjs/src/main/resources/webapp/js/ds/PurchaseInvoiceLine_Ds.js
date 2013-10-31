/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
	
Ext.define(Dnet.ns.sc + "PurchaseInvoiceLine_Ds", {
	extend: 'Ext.data.Model',
	
	validations: [
		{field: "product", type: 'presence'},
		{field: "quantity", type: 'presence'},
		{field: "unitPrice", type: 'presence'}
	],
	
	initRecord: function() {
		this.set("quantity", 1);
		this.set("unitPrice", 0);
		this.set("netAmount", 0);
		this.set("taxAmount", 0);
		this.set("amount", 0);
	},
	
	fields: [
		{name:"quantity", type:"float", useNull:true},
		{name:"unitPrice", type:"float", useNull:true},
		{name:"netAmount", type:"float", useNull:true},
		{name:"taxAmount", type:"float", useNull:true},
		{name:"amount", type:"float", useNull:true},
		{name:"netAmountLoc", type:"float", useNull:true},
		{name:"taxAmountLoc", type:"float", useNull:true},
		{name:"amountLoc", type:"float", useNull:true},
		{name:"entryMode", type:"string"},
		{name:"invoiceId", type:"string"},
		{name:"invoiceDocNo", type:"string"},
		{name:"companyId", type:"string"},
		{name:"company", type:"string"},
		{name:"productAccountId", type:"string"},
		{name:"productId", type:"string"},
		{name:"product", type:"string"},
		{name:"productName", type:"string"},
		{name:"uomId", type:"string"},
		{name:"uom", type:"string"},
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
