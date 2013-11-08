/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.model;
import java.math.BigDecimal;
import java.util.Date;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.Payable_Ds;

/**
 * Helper filter object to run query by example with range values.
 *
 */
public class Payable_DsFilter extends Payable_Ds {

	private Date dueDate_From;

	private Date dueDate_To;

	private BigDecimal amount_From;

	private BigDecimal amount_To;

	private BigDecimal amountPayed_From;

	private BigDecimal amountPayed_To;

	private BigDecimal amountRemained_From;

	private BigDecimal amountRemained_To;

	public Date getDueDate_From() {
		return this.dueDate_From;
	}

	public Date getDueDate_To() {
		return this.dueDate_To;
	}

	public void setDueDate_From(Date dueDate_From) {
		this.dueDate_From = dueDate_From;
	}

	public void setDueDate_To(Date dueDate_To) {
		this.dueDate_To = dueDate_To;
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

	public BigDecimal getAmountPayed_From() {
		return this.amountPayed_From;
	}

	public BigDecimal getAmountPayed_To() {
		return this.amountPayed_To;
	}

	public void setAmountPayed_From(BigDecimal amountPayed_From) {
		this.amountPayed_From = amountPayed_From;
	}

	public void setAmountPayed_To(BigDecimal amountPayed_To) {
		this.amountPayed_To = amountPayed_To;
	}

	public BigDecimal getAmountRemained_From() {
		return this.amountRemained_From;
	}

	public BigDecimal getAmountRemained_To() {
		return this.amountRemained_To;
	}

	public void setAmountRemained_From(BigDecimal amountRemained_From) {
		this.amountRemained_From = amountRemained_From;
	}

	public void setAmountRemained_To(BigDecimal amountRemained_To) {
		this.amountRemained_To = amountRemained_To;
	}
}
