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
import net.nan21.dnet.module.md.domain.impl.org.FinancialAccount;
import net.nan21.dnet.module.md.domain.impl.org.Org;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;

@Ds(entity = Payment.class, jpqlWhere = " e.direction = 'out' ", sort = {@SortField(field = PaymentOut_Ds.f_docDate, desc = true)})
@RefLookups({
		@RefLookup(refId = PaymentOut_Ds.f_docTypeId, namedQuery = DocType.NQ_FIND_BY_NAME, params = {@Param(name = "name", field = PaymentOut_Ds.f_docType)}),
		@RefLookup(refId = PaymentOut_Ds.f_currencyId, namedQuery = Currency.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PaymentOut_Ds.f_currency)}),
		@RefLookup(refId = PaymentOut_Ds.f_companyId, namedQuery = Org.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PaymentOut_Ds.f_company)}),
		@RefLookup(refId = PaymentOut_Ds.f_vendorAccountId, namedQuery = BpAccount.NQ_FIND_BY_ORG_BP_PRIMITIVE, params = {
				@Param(name = "companyId", field = PaymentOut_Ds.f_companyId),
				@Param(name = "bpartnerId", field = PaymentOut_Ds.f_vendorId)}),
		@RefLookup(refId = PaymentOut_Ds.f_finAccountId, namedQuery = FinancialAccount.NQ_FIND_BY_CODE_PRIMITIVE, params = {@Param(name = "companyId", field = PaymentOut_Ds.f_finAccount)})})
public class PaymentOut_Ds extends AbstractAuditableDs<Payment> {

	public static final String f_docNo = "docNo";
	public static final String f_docDate = "docDate";
	public static final String f_sourceDocNo = "sourceDocNo";
	public static final String f_confirmed = "confirmed";
	public static final String f_posted = "posted";
	public static final String f_generated = "generated";
	public static final String f_usage = "usage";
	public static final String f_direction = "direction";
	public static final String f_docTypeId = "docTypeId";
	public static final String f_docType = "docType";
	public static final String f_currencyId = "currencyId";
	public static final String f_currency = "currency";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_vendorAccountId = "vendorAccountId";
	public static final String f_vendorId = "vendorId";
	public static final String f_vendor = "vendor";
	public static final String f_vendorName = "vendorName";
	public static final String f_amount = "amount";
	public static final String f_amountLoc = "amountLoc";
	public static final String f_amountRef = "amountRef";
	public static final String f_xrateLoc = "xrateLoc";
	public static final String f_xrateRef = "xrateRef";
	public static final String f_finAccountId = "finAccountId";
	public static final String f_finAccount = "finAccount";

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

	@DsField
	private String usage;

	@DsField(noUpdate = true)
	private String direction;

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
	private String vendorAccountId;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.id")
	private String vendorId;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.code")
	private String vendor;

	@DsField(noUpdate = true, join = "left", path = "bpAccount.bpartner.name")
	private String vendorName;

	@DsField
	private BigDecimal amount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountRef;

	@DsField
	private BigDecimal xrateLoc;

	@DsField
	private BigDecimal xrateRef;

	@DsField(join = "left", path = "finAccount.id")
	private String finAccountId;

	@DsField(join = "left", path = "finAccount.code")
	private String finAccount;

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

	public String getUsage() {
		return this.usage;
	}

	public void setUsage(String usage) {
		this.usage = usage;
	}

	public String getDirection() {
		return this.direction;
	}

	public void setDirection(String direction) {
		this.direction = direction;
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

	public String getVendorAccountId() {
		return this.vendorAccountId;
	}

	public void setVendorAccountId(String vendorAccountId) {
		this.vendorAccountId = vendorAccountId;
	}

	public String getVendorId() {
		return this.vendorId;
	}

	public void setVendorId(String vendorId) {
		this.vendorId = vendorId;
	}

	public String getVendor() {
		return this.vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public String getVendorName() {
		return this.vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
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

	public String getFinAccountId() {
		return this.finAccountId;
	}

	public void setFinAccountId(String finAccountId) {
		this.finAccountId = finAccountId;
	}

	public String getFinAccount() {
		return this.finAccount;
	}

	public void setFinAccount(String finAccount) {
		this.finAccount = finAccount;
	}
}
