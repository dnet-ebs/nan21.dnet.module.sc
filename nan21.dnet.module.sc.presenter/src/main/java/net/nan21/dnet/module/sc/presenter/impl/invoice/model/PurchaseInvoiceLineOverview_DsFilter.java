/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.invoice.model;
import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoiceLineOverview_Ds;

/**
 * Helper filter object to run query by example with range values.
 *
 */
public class PurchaseInvoiceLineOverview_DsFilter
		extends
			PurchaseInvoiceLineOverview_Ds {

	private Date docDate_From;

	private Date docDate_To;

	private BigDecimal quantity_From;

	private BigDecimal quantity_To;

	private BigDecimal unitPrice_From;

	private BigDecimal unitPrice_To;

	private BigDecimal netAmount_From;

	private BigDecimal netAmount_To;

	public Date getDocDate_From() {
		return this.docDate_From;
	}

	public Date getDocDate_To() {
		return this.docDate_To;
	}

	public void setDocDate_From(Date docDate_From) {
		this.docDate_From = docDate_From;
	}

	public void setDocDate_To(Date docDate_To) {
		this.docDate_To = docDate_To;
	}

	public BigDecimal getQuantity_From() {
		return this.quantity_From;
	}

	public BigDecimal getQuantity_To() {
		return this.quantity_To;
	}

	public void setQuantity_From(BigDecimal quantity_From) {
		this.quantity_From = quantity_From;
	}

	public void setQuantity_To(BigDecimal quantity_To) {
		this.quantity_To = quantity_To;
	}

	public BigDecimal getUnitPrice_From() {
		return this.unitPrice_From;
	}

	public BigDecimal getUnitPrice_To() {
		return this.unitPrice_To;
	}

	public void setUnitPrice_From(BigDecimal unitPrice_From) {
		this.unitPrice_From = unitPrice_From;
	}

	public void setUnitPrice_To(BigDecimal unitPrice_To) {
		this.unitPrice_To = unitPrice_To;
	}

	public BigDecimal getNetAmount_From() {
		return this.netAmount_From;
	}

	public BigDecimal getNetAmount_To() {
		return this.netAmount_To;
	}

	public void setNetAmount_From(BigDecimal netAmount_From) {
		this.netAmount_From = netAmount_From;
	}

	public void setNetAmount_To(BigDecimal netAmount_To) {
		this.netAmount_To = netAmount_To;
	}
}
