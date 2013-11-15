/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrderLine;

@Ds(entity = PurchaseOrderLine.class)
public class PurchaseOrderLineOverview_Ds
		extends
			AbstractAuditableDs<PurchaseOrderLine> {

	public static final String f_docId = "docId";
	public static final String f_docNo = "docNo";
	public static final String f_docDate = "docDate";
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
	public static final String f_quantity = "quantity";
	public static final String f_unitPrice = "unitPrice";
	public static final String f_netAmount = "netAmount";
	public static final String f_taxAmount = "taxAmount";
	public static final String f_amount = "amount";
	public static final String f_netAmountLoc = "netAmountLoc";
	public static final String f_taxAmountLoc = "taxAmountLoc";
	public static final String f_amountLoc = "amountLoc";
	public static final String f_productAccountId = "productAccountId";
	public static final String f_productId = "productId";
	public static final String f_product = "product";
	public static final String f_productName = "productName";
	public static final String f_uomId = "uomId";
	public static final String f_uom = "uom";

	@DsField(join = "left", path = "order.id")
	private String docId;

	@DsField(join = "left", path = "order.docNo")
	private String docNo;

	@DsField(join = "left", path = "order.docDate")
	private Date docDate;

	@DsField(join = "left", path = "order.docType.id")
	private String docTypeId;

	@DsField(join = "left", path = "order.docType.code")
	private String docType;

	@DsField(join = "left", path = "order.currency.id")
	private String currencyId;

	@DsField(join = "left", path = "order.currency.code")
	private String currency;

	@DsField(join = "left", path = "order.company.id")
	private String companyId;

	@DsField(join = "left", path = "order.company.code")
	private String company;

	@DsField(join = "left", path = "order.bpAccount.id")
	private String bpAccountId;

	@DsField(join = "left", path = "order.bpAccount.bpartner.id")
	private String bpartnerId;

	@DsField(join = "left", path = "order.bpAccount.bpartner.code")
	private String bpartner;

	@DsField(join = "left", path = "order.bpAccount.bpartner.name")
	private String bpartnerName;

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

	@DsField
	private BigDecimal netAmountLoc;

	@DsField
	private BigDecimal taxAmountLoc;

	@DsField
	private BigDecimal amountLoc;

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

	public PurchaseOrderLineOverview_Ds() {
		super();
	}

	public PurchaseOrderLineOverview_Ds(PurchaseOrderLine e) {
		super(e);
	}

	public String getDocId() {
		return this.docId;
	}

	public void setDocId(String docId) {
		this.docId = docId;
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
}
