/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;

import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.api.annotation.Param;
import net.nan21.dnet.core.api.annotation.RefLookup;
import net.nan21.dnet.core.api.annotation.RefLookups;
import net.nan21.dnet.core.api.annotation.SortField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.bd.domain.impl.currency.Currency;
import net.nan21.dnet.module.md.domain.impl.base.DocType;
import net.nan21.dnet.module.md.domain.impl.bp.BpAccount;
import net.nan21.dnet.module.md.domain.impl.org.Org;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;

@Ds(entity = Payment.class, sort = {@SortField(field = PaymentOut_Ds.f_docDate, desc = true)})
@RefLookups({
		@RefLookup(refId = PaymentOut_Ds.f_docTypeId, namedQuery = DocType.NQ_FIND_BY_NAME, params = {@Param(name = "name", field = PaymentOut_Ds.f_docType)}),
		@RefLookup(refId = PaymentOut_Ds.f_currencyId, namedQuery = Currency.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PaymentOut_Ds.f_currency)}),
		@RefLookup(refId = PaymentOut_Ds.f_companyId, namedQuery = Org.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PaymentOut_Ds.f_company)}),
		@RefLookup(refId = PaymentOut_Ds.f_bpAccountId, namedQuery = BpAccount.NQ_FIND_BY_ORG_BP_PRIMITIVE, params = {
				@Param(name = "companyId", field = PaymentOut_Ds.f_companyId),
				@Param(name = "bpartnerId", field = PaymentOut_Ds.f_bpartnerId)})})
public class PaymentOut_Ds extends AbstractAuditableDs<Payment> {

	public static final String f_docNo = "docNo";
	public static final String f_docDate = "docDate";
	public static final String f_sourceDocNo = "sourceDocNo";
	public static final String f_confirmed = "confirmed";
	public static final String f_posted = "posted";
	public static final String f_generated = "generated";
	public static final String f_docTypeId = "docTypeId";
	public static final String f_docType = "docType";
	public static final String f_currencyId = "currencyId";
	public static final String f_currency = "currency";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_bpAccountId = "bpAccountId";
	public static final String f_bpartnerId = "bpartnerId";
	public static final String f_bpartner = "bpartner";
	public static final String f_bpartnerName = "bpartnerName";
	public static final String f_amount = "amount";
	public static final String f_amountLoc = "amountLoc";
	public static final String f_amountRef = "amountRef";
	public static final String f_xrateLoc = "xrateLoc";
	public static final String f_xrateRef = "xrateRef";

	@DsField
	private String docNo;

	@DsField
	private Date docDate;

	@DsField
	private String sourceDocNo;

	@DsField(noInsert = true, noUpdate = true)
	private Boolean confirmed;

	@DsField(noInsert = true, noUpdate = true)
	private Boolean posted;

	@DsField
	private Boolean generated;

	@DsField(noUpdate = true, join = "left", path = "docType.id")
	private String docTypeId;

	@DsField(noUpdate = true, join = "left", path = "docType.code")
	private String docType;

	@DsField(noUpdate = true, join = "left", path = "currency.id")
	private String currencyId;

	@DsField(noUpdate = true, join = "left", path = "currency.code")
	private String currency;

	@DsField(noUpdate = true, join = "left", path = "company.id")
	private String companyId;

	@DsField(noUpdate = true, join = "left", path = "company.code")
	private String company;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.id")
	private String bpAccountId;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.id")
	private String bpartnerId;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.code")
	private String bpartner;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.name")
	private String bpartnerName;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountRef;

	@DsField
	private BigDecimal xrateLoc;

	@DsField
	private BigDecimal xrateRef;

	public PaymentOut_Ds() {
		super();
	}

	public PaymentOut_Ds(Payment e) {
		super(e);
	}

	public String getDocNo() {
		return this.docNo;
	}

	public void setDocNo(String docNo) {
		this.docNo = docNo;
	}

	public Date getDocDate() {
		return this.docDate;
	}

	public void setDocDate(Date docDate) {
		this.docDate = docDate;
	}

	public String getSourceDocNo() {
		return this.sourceDocNo;
	}

	public void setSourceDocNo(String sourceDocNo) {
		this.sourceDocNo = sourceDocNo;
	}

	public Boolean getConfirmed() {
		return this.confirmed;
	}

	public void setConfirmed(Boolean confirmed) {
		this.confirmed = confirmed;
	}

	public Boolean getPosted() {
		return this.posted;
	}

	public void setPosted(Boolean posted) {
		this.posted = posted;
	}

	public Boolean getGenerated() {
		return this.generated;
	}

	public void setGenerated(Boolean generated) {
		this.generated = generated;
	}

	public String getDocTypeId() {
		return this.docTypeId;
	}

	public void setDocTypeId(String docTypeId) {
		this.docTypeId = docTypeId;
	}

	public String getDocType() {
		return this.docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public String getCurrencyId() {
		return this.currencyId;
	}

	public void setCurrencyId(String currencyId) {
		this.currencyId = currencyId;
	}

	public String getCurrency() {
		return this.currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getCompany() {
		return this.company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getBpAccountId() {
		return this.bpAccountId;
	}

	public void setBpAccountId(String bpAccountId) {
		this.bpAccountId = bpAccountId;
	}

	public String getBpartnerId() {
		return this.bpartnerId;
	}

	public void setBpartnerId(String bpartnerId) {
		this.bpartnerId = bpartnerId;
	}

	public String getBpartner() {
		return this.bpartner;
	}

	public void setBpartner(String bpartner) {
		this.bpartner = bpartner;
	}

	public String getBpartnerName() {
		return this.bpartnerName;
	}

	public void setBpartnerName(String bpartnerName) {
		this.bpartnerName = bpartnerName;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public BigDecimal getAmountLoc() {
		return this.amountLoc;
	}

	public void setAmountLoc(BigDecimal amountLoc) {
		this.amountLoc = amountLoc;
	}

	public BigDecimal getAmountRef() {
		return this.amountRef;
	}

	public void setAmountRef(BigDecimal amountRef) {
		this.amountRef = amountRef;
	}

	public BigDecimal getXrateLoc() {
		return this.xrateLoc;
	}

	public void setXrateLoc(BigDecimal xrateLoc) {
		this.xrateLoc = xrateLoc;
	}

	public BigDecimal getXrateRef() {
		return this.xrateRef;
	}

	public void setXrateRef(BigDecimal xrateRef) {
		this.xrateRef = xrateRef;
	}
}
