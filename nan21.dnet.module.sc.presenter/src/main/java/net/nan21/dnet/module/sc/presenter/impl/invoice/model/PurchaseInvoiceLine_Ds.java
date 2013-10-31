/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.invoice.model;

import java.math.BigDecimal;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.api.annotation.Param;
import net.nan21.dnet.core.api.annotation.RefLookup;
import net.nan21.dnet.core.api.annotation.RefLookups;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.bd.domain.impl.uom.Uom;
import net.nan21.dnet.module.md.domain.impl.base.Tax;
import net.nan21.dnet.module.md.domain.impl.mm.ProductAccount;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseInvoice;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseInvoiceLine;

@Ds(entity = PurchaseInvoiceLine.class)
@RefLookups({
		@RefLookup(refId = PurchaseInvoiceLine_Ds.f_invoiceId, namedQuery = PurchaseInvoice.NQ_FIND_BY_DOCNO, params = {@Param(name = "docNo", field = PurchaseInvoiceLine_Ds.f_invoiceDocNo)}),
		@RefLookup(refId = PurchaseInvoiceLine_Ds.f_productAccountId, namedQuery = ProductAccount.NQ_FIND_BY_PROD_ORG_PRIMITIVE, params = {
				@Param(name = "productId", field = PurchaseInvoiceLine_Ds.f_productId),
				@Param(name = "companyId", field = PurchaseInvoiceLine_Ds.f_companyId)}),
		@RefLookup(refId = PurchaseInvoiceLine_Ds.f_uomId, namedQuery = Uom.NQ_FIND_BY_CODE, params = {@Param(name = "code", field = PurchaseInvoiceLine_Ds.f_uom)}),
		@RefLookup(refId = PurchaseInvoiceLine_Ds.f_taxId, namedQuery = Tax.NQ_FIND_BY_NAME, params = {@Param(name = "name", field = PurchaseInvoiceLine_Ds.f_tax)})})
public class PurchaseInvoiceLine_Ds
		extends
			AbstractAuditableDs<PurchaseInvoiceLine> {

	public static final String f_quantity = "quantity";
	public static final String f_unitPrice = "unitPrice";
	public static final String f_netAmount = "netAmount";
	public static final String f_taxAmount = "taxAmount";
	public static final String f_amount = "amount";
	public static final String f_netAmountLoc = "netAmountLoc";
	public static final String f_taxAmountLoc = "taxAmountLoc";
	public static final String f_amountLoc = "amountLoc";
	public static final String f_entryMode = "entryMode";
	public static final String f_invoiceId = "invoiceId";
	public static final String f_invoiceDocNo = "invoiceDocNo";
	public static final String f_companyId = "companyId";
	public static final String f_company = "company";
	public static final String f_productAccountId = "productAccountId";
	public static final String f_productId = "productId";
	public static final String f_product = "product";
	public static final String f_productName = "productName";
	public static final String f_uomId = "uomId";
	public static final String f_uom = "uom";
	public static final String f_taxId = "taxId";
	public static final String f_tax = "tax";

	@DsField
	private BigDecimal quantity;

	@DsField
	private BigDecimal unitPrice;

	@DsField
	private BigDecimal netAmount;

	@DsField
	private BigDecimal taxAmount;

	@DsField
	private BigDecimal amount;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal netAmountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal taxAmountLoc;

	@DsField(noInsert = true, noUpdate = true)
	private BigDecimal amountLoc;

	@DsField
	private String entryMode;

	@DsField(join = "left", path = "invoice.id")
	private String invoiceId;

	@DsField(join = "left", path = "invoice.docNo")
	private String invoiceDocNo;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "invoice.company.id")
	private String companyId;

	@DsField(noInsert = true, noUpdate = true, join = "left", path = "invoice.company.code")
	private String company;

	@DsField(join = "left", path = "productAccount.id")
	private String productAccountId;

	@DsField(join = "left", path = "productAccount.product.id")
	private String productId;

	@DsField(join = "left", path = "productAccount.product.code")
	private String product;

	@DsField(join = "left", path = "productAccount.product.name")
	private String productName;

	@DsField(join = "left", path = "uom.id")
	private String uomId;

	@DsField(join = "left", path = "uom.code")
	private String uom;

	@DsField(join = "left", path = "tax.id")
	private String taxId;

	@DsField(join = "left", path = "tax.name")
	private String tax;

	public PurchaseInvoiceLine_Ds() {
		super();
	}

	public PurchaseInvoiceLine_Ds(PurchaseInvoiceLine e) {
		super(e);
	}

	public BigDecimal getQuantity() {
		return this.quantity;
	}

	public void setQuantity(BigDecimal quantity) {
		this.quantity = quantity;
	}

	public BigDecimal getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public BigDecimal getNetAmount() {
		return this.netAmount;
	}

	public void setNetAmount(BigDecimal netAmount) {
		this.netAmount = netAmount;
	}

	public BigDecimal getTaxAmount() {
		return this.taxAmount;
	}

	public void setTaxAmount(BigDecimal taxAmount) {
		this.taxAmount = taxAmount;
	}

	public BigDecimal getAmount() {
		return this.amount;
	}

	public void setAmount(BigDecimal amount) {
		this.amount = amount;
	}

	public BigDecimal getNetAmountLoc() {
		return this.netAmountLoc;
	}

	public void setNetAmountLoc(BigDecimal netAmountLoc) {
		this.netAmountLoc = netAmountLoc;
	}

	public BigDecimal getTaxAmountLoc() {
		return this.taxAmountLoc;
	}

	public void setTaxAmountLoc(BigDecimal taxAmountLoc) {
		this.taxAmountLoc = taxAmountLoc;
	}

	public BigDecimal getAmountLoc() {
		return this.amountLoc;
	}

	public void setAmountLoc(BigDecimal amountLoc) {
		this.amountLoc = amountLoc;
	}

	public String getEntryMode() {
		return this.entryMode;
	}

	public void setEntryMode(String entryMode) {
		this.entryMode = entryMode;
	}

	public String getInvoiceId() {
		return this.invoiceId;
	}

	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getInvoiceDocNo() {
		return this.invoiceDocNo;
	}

	public void setInvoiceDocNo(String invoiceDocNo) {
		this.invoiceDocNo = invoiceDocNo;
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

	public String getProductAccountId() {
		return this.productAccountId;
	}

	public void setProductAccountId(String productAccountId) {
		this.productAccountId = productAccountId;
	}

	public String getProductId() {
		return this.productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getProduct() {
		return this.product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getProductName() {
		return this.productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getUomId() {
		return this.uomId;
	}

	public void setUomId(String uomId) {
		this.uomId = uomId;
	}

	public String getUom() {
		return this.uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}

	public String getTaxId() {
		return this.taxId;
	}

	public void setTaxId(String taxId) {
		this.taxId = taxId;
	}

	public String getTax() {
		return this.tax;
	}

	public void setTax(String tax) {
		this.tax = tax;
	}
}
