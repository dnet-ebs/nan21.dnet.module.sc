/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseOrder_Ui" , {
	extend: "dnet.core.ui.AbstractUi",
	alias: "widget.PurchaseOrder_Ui",
	
	/**
	 * Data-controls definition
	 */
	_defineDcs_: function() {
		this._getBuilder_()	
		.addDc("ord", Ext.create(Dnet.ns.sc + "PurchaseOrder_Dc" ,{}))	
		.addDc("tax", Ext.create(Dnet.ns.sc + "PurchaseOrderTax_Dc" ,{}))	
		.addDc("line", Ext.create(Dnet.ns.sc + "PurchaseOrderLine_Dc" ,{}))	
		.addDc("lineTax", Ext.create(Dnet.ns.sc + "PurchaseOrderLineTax_Dc" ,{}))	
		.addDc("atch", Ext.create(Dnet.ns.bd + "Attachment_Dc" ,{}))
		.linkDc("tax", "ord",{fields:[
			{childField:"orderId", parentField:"id"}]}
		).linkDc("line", "ord",{fields:[
			{childField:"orderId", parentField:"id"}, {childField:"companyId", parentField:"companyId"}]}
		).linkDc("lineTax", "line",{fields:[
			{childField:"lineId", parentField:"id"}]}
		).linkDc("atch", "ord",{fields:[
			{childField:"targetRefid", parentField:"refid"}, {childField:"targetAlias", parentField:"entityAlias"}, {childField:"targetType", value:"N/A"}]}
		);
	},

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		.addButton({name:"btnShowBpAccount", disabled:true, handler: this.onBtnShowBpAccount,
				stateManager:{ name:"selected_one", dc:"ord" }, scope:this})
		.addButton({name:"btnConfirm", iconCls:"icon-action-commit", disabled:true, handler: this.onBtnConfirm,
				stateManager:{ name:"selected_one_clean", dc:"ord" , and: function(dc) {return (dc.record && !dc.record.get("confirmed"));}}, scope:this})
		.addButton({name:"btnUnConfirm", iconCls:"icon-action-rollback", disabled:true, handler: this.onBtnUnConfirm,
				stateManager:{ name:"selected_one_clean", dc:"ord" , and: function(dc) {return (dc.record && dc.record.get("confirmed") && !dc.record.get("posted")  );}}, scope:this})
		.addButton({name:"btnShowCopyLines", disabled:true, handler: this.onBtnShowCopyLines,
				stateManager:{ name:"record_is_clean", dc:"ord" , and: function(dc) {return (dc.record && !dc.record.get("confirmed"));}}, scope:this})
		.addButton({name:"btnDoCopyLines", disabled:false, handler: this.onBtnDoCopyLines, scope:this})
		.addButton({name:"btnCreateContinue", disabled:true, handler: this.onBtnCreateContinue,
				stateManager:{ name:"record_is_dirty", dc:"ord" , and: function(dc) {return (dc.record.isValid());}}, scope:this})
		.addButton({name:"btnCreateCancel", disabled:false, handler: this.onBtnCreateCancel, scope:this})
		.addDcFilterFormView("ord", {name:"ordFilter", xtype:"sc_PurchaseOrder_Dc$Filter"})
		.addDcGridView("ord", {name:"ordList", xtype:"sc_PurchaseOrder_Dc$List"})
		.addDcFormView("ord", {name:"ordCreate", xtype:"sc_PurchaseOrder_Dc$Create"})
		.addDcFormView("ord", {name:"ordEditMain", xtype:"sc_PurchaseOrder_Dc$Edit"})
		.addDcFormView("ord", {name:"copyLinesForm", width:400, xtype:"sc_PurchaseOrder_Dc$CopyLinesForm"})
		.addWindow({name:"wdwCopyLines", _hasTitle_:true, closeAction:'hide', resizable:true, layout:"fit", modal:true,
			items:[this._elems_.get("copyLinesForm")], 
					dockedItems:[{xtype:"toolbar", ui:"footer", dock:'bottom', weight:-1,
						items:[ this._elems_.get("btnDoCopyLines")]}]})
		.addDcGridView("tax", {name:"taxList", _hasTitle_:true, xtype:"sc_PurchaseOrderTax_Dc$List"})
		.addDcFilterFormView("line", {name:"lineFilter", _hasTitle_:true, width:250, xtype:"sc_PurchaseOrderLine_Dc$FilterCtx", collapsible:true, collapsed:true
		})
		.addDcGridView("line", {name:"lineList", xtype:"sc_PurchaseOrderLine_Dc$CtxList"})
		.addDcFormView("line", {name:"lineEdit", xtype:"sc_PurchaseOrderLine_Dc$EditForm"})
		.addDcGridView("lineTax", {name:"lineTaxList", _hasTitle_:true, width:400, xtype:"sc_PurchaseOrderLineTax_Dc$CtxList", collapsible:true, collapsed:true
		})
		.addDcGridView("atch", {name:"atchList", _hasTitle_:true, xtype:"bd_Attachment_Dc$List"})
		.addWindow({name:"wdwCreate", _hasTitle_:true, closeAction:'hide', resizable:true, layout:"fit", modal:true,
			items:[this._elems_.get("ordCreate")], closable:false
			, 
					dockedItems:[{xtype:"toolbar", ui:"footer", dock:'bottom', weight:-1,
						items:[ this._elems_.get("btnCreateContinue"), this._elems_.get("btnCreateCancel")]}]})
		.addPanel({name:"main", layout:"card", activeItem:0})
		.addPanel({name:"canvas1", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"canvas2", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"ordDetailsTab", xtype:"tabpanel", activeTab:0, plain:false, deferredRender:false})
		.addPanel({name:"linesPanel", _hasTitle_:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"linesDataPanel", layout:"card", activeItem:0});
	},
	
	/**
	 * Combine the components
	 */
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["canvas1", "canvas2"])
		.addChildrenTo("canvas1", ["ordFilter", "ordList"], ["north", "center"])
		.addChildrenTo("canvas2", ["ordEditMain", "ordDetailsTab"], ["north", "center"])
		.addChildrenTo("ordDetailsTab", ["linesPanel", "taxList", "atchList"])
		.addChildrenTo("linesPanel", ["lineFilter", "linesDataPanel", "lineTaxList"], ["west", "center", "east"])
		.addChildrenTo("linesDataPanel", ["lineList", "lineEdit"])
		.addToolbarTo("canvas1", "tlbInvList")
		.addToolbarTo("canvas2", "tlbInvEdit")
		.addToolbarTo("taxList", "tlbTaxList")
		.addToolbarTo("lineList", "tlbLineList")
		.addToolbarTo("lineEdit", "tlbLineEdit")
		.addToolbarTo("lineTaxList", "tlbLineTaxList")
		.addToolbarTo("atchList", "tlbAtchList");
	},
	
	/**
	 * Create toolbars
	 */
	_defineToolbars_: function() {
		this._getBuilder_()
		.beginToolbar("tlbInvList", {dc: "ord"})
			.addTitle().addSeparator().addSeparator()
			.addQuery().addEdit().addNew().addCopy().addDeleteSelected()
			.addReports()
		.end()
		.beginToolbar("tlbInvEdit", {dc: "ord"})
			.addTitle().addSeparator().addSeparator()
			.addBack().addSave().addNew().addCopy().addCancel().addPrevRec().addNextRec()
			.addSeparator().addSeparator()
			.addButtons([this._elems_.get("btnShowBpAccount") ,this._elems_.get("btnShowCopyLines") ,this._elems_.get("btnConfirm") ,this._elems_.get("btnUnConfirm") ])
			.addReports()
		.end()
		.beginToolbar("tlbTaxList", {dc: "tax"})
			.addTitle().addSeparator().addSeparator()
			.addQuery()
			.addSeparator().addAutoLoad()
			.addReports()
		.end()
		.beginToolbar("tlbLineList", {dc: "line"})
			.addTitle().addSeparator().addSeparator()
			.addQuery().addEdit({inContainer:"linesDataPanel",showView:"lineEdit"}
			).addNew().addCopy().addDeleteSelected()
			.addSeparator().addAutoLoad()
			.addReports()
		.end()
		.beginToolbar("tlbLineEdit", {dc: "line"})
			.addTitle().addSeparator().addSeparator()
			.addBack({inContainer:"linesDataPanel",showView:"lineList"}
			).addSave().addNew().addCopy().addCancel().addPrevRec().addNextRec()
			.addSeparator().addAutoLoad()
			.addReports()
		.end()
		.beginToolbar("tlbLineTaxList", {dc: "lineTax"})
			.addTitle().addSeparator().addSeparator()
			.addQuery()
			.addSeparator().addAutoLoad()
			.addReports()
		.end()
		.beginToolbar("tlbAtchList", {dc: "atch"})
			.addTitle().addSeparator().addSeparator()
			.addQuery().addNew().addDeleteSelected()
			.addSeparator().addAutoLoad()
			.addReports()
		.end();
	}

	
	/**
	 * On-Click handler for button btnShowBpAccount
	 */
	,onBtnShowBpAccount: function() {
		var bundle = Dnet.bundle.sc;
		var frame = "VendorAccount_Ui";
		getApplication().showFrame(frame,{
			url:Dnet.buildUiPath(bundle, frame, false),
			params: {
				company: this._getDc_("ord").getRecord().get("company"),
				companyId: this._getDc_("ord").getRecord().get("companyId"),
				bpartner: this._getDc_("ord").getRecord().get("bpartner"),
				bpartnerId: this._getDc_("ord").getRecord().get("bpartnerId")
			},
			callback: function (params) {
				this._when_called_to_edit_(params);
			}
		});
	}
	
	/**
	 * On-Click handler for button btnConfirm
	 */
	,onBtnConfirm: function() {
		var o={
			name:"confirm",
			modal:true
		};
		this._getDc_("ord").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnUnConfirm
	 */
	,onBtnUnConfirm: function() {
		var o={
			name:"unConfirm",
			modal:true
		};
		this._getDc_("ord").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnShowCopyLines
	 */
	,onBtnShowCopyLines: function() {
		this._getWindow_("wdwCopyLines").show();
	}
	
	/**
	 * On-Click handler for button btnDoCopyLines
	 */
	,onBtnDoCopyLines: function() {
		var successFn = function(dc,response,serviceName,specs) {
			this._getDc_("line").doQuery();
			this._getDc_("ord").doReloadRecord();
			this._getWindow_("wdwCopyLines").close();
		};
		var failureFn = function(dc,response,serviceName,specs) {
			this._getWindow_("wdwCopyLines").close();
		}; 
		var o={
			name:"copyLines",
			callbacks:{
				successFn: successFn,
				successScope: this,
				failureFn: failureFn,
				failureScope: this
			},
			modal:true
		};
		this._getDc_("ord").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnCreateContinue
	 */
	,onBtnCreateContinue: function() {
		this._getWindow_("wdwCreate").close();
	}
	
	/**
	 * On-Click handler for button btnCreateCancel
	 */
	,onBtnCreateCancel: function() {
		this._getWindow_("wdwCreate").close();
		this._getDc_("ord").doCancel();
	}
	
	,_whenCreateNewDoc_: function() {	
		this._getWindow_("wdwCreate").show();
	}
	
	,_afterDefineDcs_: function() {
		
		this._getDc_("ord").on("afterDoNew", this._whenCreateNewDoc_, this);
		this._getDc_("line").on("afterDoCommitSuccess", 
				function() {
					this._getDc_("ord").doReloadRecord();
				} , this );
	}
	
	,_when_called_to_edit_: function(params) {
		
		var ord = this._getDc_("ord");
		if (ord.isDirty()) {
			this._alert_dirty_();
			return;
		}
		ord.doClearQuery();
		 
		ord.setFilterValue("id", params.id );
		ord.setFilterValue("docNo", params.docNo );
		ord.setFilterValue("companyId", params.companyId );
		ord.setFilterValue("company", params.company );
		ord.doQuery();
		this._showStackedViewElement_("main",1);
	}
});
