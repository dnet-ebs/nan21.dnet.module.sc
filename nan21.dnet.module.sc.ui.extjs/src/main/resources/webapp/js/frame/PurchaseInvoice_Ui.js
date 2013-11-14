/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
Ext.define(Dnet.ns.sc + "PurchaseInvoice_Ui" , {
	extend: "dnet.core.ui.AbstractUi",
	alias: "widget.PurchaseInvoice_Ui",
	
	/**
	 * Data-controls definition
	 */
	_defineDcs_: function() {
		this._getBuilder_()	
		.addDc("inv", Ext.create(Dnet.ns.sc + "PurchaseInvoice_Dc" ,{}))	
		.addDc("tax", Ext.create(Dnet.ns.sc + "PurchaseInvoiceTax_Dc" ,{}))	
		.addDc("line", Ext.create(Dnet.ns.sc + "PurchaseInvoiceLine_Dc" ,{}))	
		.addDc("lineTax", Ext.create(Dnet.ns.sc + "PurchaseInvoiceLineTax_Dc" ,{}))	
		.addDc("atch", Ext.create(Dnet.ns.bd + "Attachment_Dc" ,{}))
		.linkDc("tax", "inv",{fields:[
			{childField:"invoiceId", parentField:"id"}]}
		).linkDc("line", "inv",{fields:[
			{childField:"invoiceId", parentField:"id"}, {childField:"companyId", parentField:"companyId"}]}
		).linkDc("lineTax", "line",{fields:[
			{childField:"lineId", parentField:"id"}]}
		).linkDc("atch", "inv",{fields:[
			{childField:"targetRefid", parentField:"refid"}, {childField:"targetAlias", parentField:"entityAlias"}, {childField:"targetType", value:"N/A"}]}
		);
	},

	/**
	 * Components definition
	 */
	_defineElements_: function() {
		this._getBuilder_()
		.addButton({name:"btnShowBpAccount", disabled:true, handler: this.onBtnShowBpAccount,
				stateManager:{ name:"selected_one", dc:"inv" }, scope:this})
		.addButton({name:"btnConfirm", iconCls:"icon-action-commit", disabled:true, handler: this.onBtnConfirm,
				stateManager:{ name:"selected_one_clean", dc:"inv" , and: function(dc) {return (dc.record && !dc.record.get("confirmed"));}}, scope:this})
		.addButton({name:"btnUnConfirm", iconCls:"icon-action-rollback", disabled:true, handler: this.onBtnUnConfirm,
				stateManager:{ name:"selected_one_clean", dc:"inv" , and: function(dc) {return (dc.record && dc.record.get("confirmed") && !dc.record.get("posted")  );}}, scope:this})
		.addButton({name:"btnPost", iconCls:"icon-action-commit", disabled:true, handler: this.onBtnPost,
				stateManager:{ name:"selected_one_clean", dc:"inv" , and: function(dc) {return (dc.record && dc.record.get("confirmed")&& !dc.record.get("posted"));}}, scope:this})
		.addButton({name:"btnUnPost", iconCls:"icon-action-rollback", disabled:true, handler: this.onBtnUnPost,
				stateManager:{ name:"selected_one_clean", dc:"inv" , and: function(dc) {return (dc.record && dc.record.get("confirmed") &&  dc.record.get("confirmed") && dc.record.get("posted") );}}, scope:this})
		.addButton({name:"btnShowCopyLines", disabled:true, handler: this.onBtnShowCopyLines,
				stateManager:{ name:"record_is_clean", dc:"inv" , and: function(dc) {return (dc.record && !dc.record.get("confirmed"));}}, scope:this})
		.addButton({name:"btnDoCopyLines", disabled:false, handler: this.onBtnDoCopyLines, scope:this})
		.addButton({name:"btnCreateContinue", disabled:true, handler: this.onBtnCreateContinue,
				stateManager:{ name:"record_is_dirty", dc:"inv" , and: function(dc) {return (dc.record.isValid());}}, scope:this})
		.addButton({name:"btnCreateCancel", disabled:false, handler: this.onBtnCreateCancel, scope:this})
		.addDcFilterFormView("inv", {name:"invFilter", xtype:"sc_PurchaseInvoice_Dc$Filter"})
		.addDcGridView("inv", {name:"invList", xtype:"sc_PurchaseInvoice_Dc$List"})
		.addDcFormView("inv", {name:"invCreate", xtype:"sc_PurchaseInvoice_Dc$Create"})
		.addDcFormView("inv", {name:"invEditMain", xtype:"sc_PurchaseInvoice_Dc$Edit"})
		.addDcFormView("inv", {name:"copyLinesForm", width:400, xtype:"sc_PurchaseInvoice_Dc$CopyLinesForm"})
		.addWindow({name:"wdwCopyLines", _hasTitle_:true, closeAction:'hide', resizable:true, layout:"fit", modal:true,
			items:[this._elems_.get("copyLinesForm")], 
					dockedItems:[{xtype:"toolbar", ui:"footer", dock:'bottom', weight:-1,
						items:[ this._elems_.get("btnDoCopyLines")]}]})
		.addDcGridView("tax", {name:"taxList", _hasTitle_:true, xtype:"sc_PurchaseInvoiceTax_Dc$List"})
		.addDcFilterFormView("line", {name:"lineFilter", _hasTitle_:true, width:250, xtype:"sc_PurchaseInvoiceLine_Dc$FilterCtx", collapsible:true, collapsed:true
		})
		.addDcGridView("line", {name:"lineList", xtype:"sc_PurchaseInvoiceLine_Dc$CtxList"})
		.addDcFormView("line", {name:"lineEdit", xtype:"sc_PurchaseInvoiceLine_Dc$EditForm"})
		.addDcGridView("lineTax", {name:"lineTaxList", _hasTitle_:true, width:400, xtype:"sc_PurchaseInvoiceLineTax_Dc$CtxList", collapsible:true, collapsed:true
		})
		.addDcGridView("atch", {name:"atchList", _hasTitle_:true, xtype:"bd_Attachment_Dc$List"})
		.addWindow({name:"wdwCreate", _hasTitle_:true, closeAction:'hide', resizable:true, layout:"fit", modal:true,
			items:[this._elems_.get("invCreate")], closable:false
			, 
					dockedItems:[{xtype:"toolbar", ui:"footer", dock:'bottom', weight:-1,
						items:[ this._elems_.get("btnCreateContinue"), this._elems_.get("btnCreateCancel")]}]})
		.addPanel({name:"main", layout:"card", activeItem:0})
		.addPanel({name:"canvas1", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"canvas2", preventHeader:true, isCanvas:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"invDetailsTab", xtype:"tabpanel", activeTab:0, plain:false, deferredRender:false})
		.addPanel({name:"linesPanel", _hasTitle_:true, layout:"border", defaults:{split:true}})
		.addPanel({name:"linesDataPanel", layout:"card", activeItem:0});
	},
	
	/**
	 * Combine the components
	 */
	_linkElements_: function() {
		this._getBuilder_()
		.addChildrenTo("main", ["canvas1", "canvas2"])
		.addChildrenTo("canvas1", ["invFilter", "invList"], ["north", "center"])
		.addChildrenTo("canvas2", ["invEditMain", "invDetailsTab"], ["north", "center"])
		.addChildrenTo("invDetailsTab", ["linesPanel", "taxList", "atchList"])
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
		.beginToolbar("tlbInvList", {dc: "inv"})
			.addTitle().addSeparator().addSeparator()
			.addQuery().addEdit().addNew().addCopy().addDeleteSelected()
			.addReports()
		.end()
		.beginToolbar("tlbInvEdit", {dc: "inv"})
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
				company: this._getDc_("inv").getRecord().get("company"),
				companyId: this._getDc_("inv").getRecord().get("companyId"),
				bpartner: this._getDc_("inv").getRecord().get("bpartner"),
				bpartnerId: this._getDc_("inv").getRecord().get("bpartnerId")
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
		this._getDc_("inv").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnUnConfirm
	 */
	,onBtnUnConfirm: function() {
		var o={
			name:"unConfirm",
			modal:true
		};
		this._getDc_("inv").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnPost
	 */
	,onBtnPost: function() {
		var o={
			name:"post",
			modal:true
		};
		this._getDc_("inv").doRpcData(o);
	}
	
	/**
	 * On-Click handler for button btnUnPost
	 */
	,onBtnUnPost: function() {
		var o={
			name:"unPost",
			modal:true
		};
		this._getDc_("inv").doRpcData(o);
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
			this._getDc_("inv").doReloadRecord();
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
		this._getDc_("inv").doRpcData(o);
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
		this._getDc_("inv").doCancel();
	}
	
	,_whenCreateNewDoc_: function() {	
		this._getWindow_("wdwCreate").show();
	}
	
	,_afterDefineDcs_: function() {
		
		this._getDc_("inv").on("afterDoNew", this._whenCreateNewDoc_, this);
		this._getDc_("line").on("afterDoCommitSuccess", 
				function() {
					this._getDc_("inv").doReloadRecord();
				} , this );
		this._getDc_("inv").on("afterDoServiceSuccess", 
			function() { this._applyStateAllButtons_(); this._syncReadOnlyStates_();} , this );
			
		this._getDc_("inv").on("recordChange", this._syncReadOnlyStates_, this );
	}
	
	,_syncReadOnlyStates_: function() {
		
		var rec = this._getDc_("inv").getRecord();
		if (!rec) { return; }
		var lineDc = this._getDc_("line");
		if (rec.get("confirmed")) {
			if (!lineDc.isReadOnly()) {
				lineDc.setReadOnly(true);
			}
		} else {
			if (lineDc.isReadOnly()) {
				lineDc.setReadOnly(false);
			}
		}
	}
	
	,_when_called_to_edit_: function(params) {
		
		var inv = this._getDc_("inv");
		if (inv.isDirty()) {
			this._alert_dirty_();
			return;
		}
		inv.doClearQuery();
		 
		inv.setFilterValue("id", params.id );
		inv.setFilterValue("docNo", params.docNo );
		inv.setFilterValue("companyId", params.companyId );
		inv.setFilterValue("company", params.company );
		inv.doQuery();
		this._showStackedViewElement_("main",1);
	}
});
