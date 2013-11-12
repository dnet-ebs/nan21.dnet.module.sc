/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;
import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOut_Ds;

/**
 * Helper filter object to run query by example with range values.
 *
 */
public class PaymentOut_DsFilter extends PaymentOut_Ds {

	private Date docDate_From;

	private Date docDate_To;

	private BigDecimal amount_From;

	private BigDecimal amount_To;

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

	public BigDecimal getAmount_From() {
		return this.amount_From;
	}

	public BigDecimal getAmount_To() {
		return this.amount_To;
	}

	public void setAmount_From(BigDecimal amount_From) {
		this.amount_From = amount_From;
	}

	public void setAmount_To(BigDecimal amount_To) {
		this.amount_To = amount_To;
	}
}
