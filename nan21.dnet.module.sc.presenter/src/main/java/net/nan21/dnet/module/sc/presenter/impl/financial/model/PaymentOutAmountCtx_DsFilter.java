/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;
import java.math.BigDecimal;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOutAmountCtx_Ds;

/**
 * Helper filter object to run query by example with range values.
 *
 */
public class PaymentOutAmountCtx_DsFilter extends PaymentOutAmountCtx_Ds {

	private BigDecimal amountInitial_From;

	private BigDecimal amountInitial_To;

	public BigDecimal getAmountInitial_From() {
		return this.amountInitial_From;
	}

	public BigDecimal getAmountInitial_To() {
		return this.amountInitial_To;
	}

	public void setAmountInitial_From(BigDecimal amountInitial_From) {
		this.amountInitial_From = amountInitial_From;
	}

	public void setAmountInitial_To(BigDecimal amountInitial_To) {
		this.amountInitial_To = amountInitial_To;
	}
}
