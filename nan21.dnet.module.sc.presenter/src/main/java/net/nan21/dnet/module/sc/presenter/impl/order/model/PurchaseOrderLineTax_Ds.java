/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.model;

import java.math.BigDecimal;
import net.nan21.dnet.core.api.annotation.Ds;
import net.nan21.dnet.core.api.annotation.DsField;
import net.nan21.dnet.core.presenter.model.AbstractAuditableDs;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrderLineTax;

@Ds(entity = PurchaseOrderLineTax.class)
public class PurchaseOrderLineTax_Ds
		extends
			AbstractAuditableDs<PurchaseOrderLineTax> {

	public static final String f_baseAmount = "baseAmount";
	public static final String f_taxAmount = "taxAmount";
	public static final String f_baseAmountLoc = "baseAmountLoc";
	public static final String f_taxAmountLoc = "taxAmountLoc";
	public static final String f_lineId = "lineId";
	public static final String f_taxId = "taxId";
	public static final String f_tax = "tax";

	@DsField
	private BigDecimal baseAmount;

	@DsField
	private BigDecimal taxAmount;

	@DsField
	private BigDecimal baseAmountLoc;

	@DsField
	private BigDecimal taxAmountLoc;

	@DsField(join = "left", path = "line.id")
	private String lineId;

	@DsField(join = "left", path = "tax.id")
	private String taxId;

	@DsField(join = "left", path = "tax.name")
	private String tax;

	public PurchaseOrderLineTax_Ds() {
		super();
	}

	public PurchaseOrderLineTax_Ds(PurchaseOrderLineTax e) {
		super(e);
	}

	public BigDecimal getBaseAmount() {
		return this.baseAmount;
	}

	public void setBaseAmount(BigDecimal baseAmount) {
		this.baseAmount = baseAmount;
	}

	public BigDecimal getTaxAmount() {
		return this.taxAmount;
	}

	public void setTaxAmount(BigDecimal taxAmount) {
		this.taxAmount = taxAmount;
	}

	public BigDecimal getBaseAmountLoc() {
		return this.baseAmountLoc;
	}

	public void setBaseAmountLoc(BigDecimal baseAmountLoc) {
		this.baseAmountLoc = baseAmountLoc;
	}

	public BigDecimal getTaxAmountLoc() {
		return this.taxAmountLoc;
	}

	public void setTaxAmountLoc(BigDecimal taxAmountLoc) {
		this.taxAmountLoc = taxAmountLoc;
	}

	public String getLineId() {
		return this.lineId;
	}

	public void setLineId(String lineId) {
		this.lineId = lineId;
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
