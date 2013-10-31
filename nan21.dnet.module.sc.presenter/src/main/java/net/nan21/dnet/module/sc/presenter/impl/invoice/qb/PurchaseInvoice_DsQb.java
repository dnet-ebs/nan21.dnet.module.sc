/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.invoice.qb;

import net.nan21.dnet.core.presenter.action.query.QueryBuilderWithJpql;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_Ds;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_DsFilter;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_DsParam;

import net.nan21.dnet.core.api.session.Session;

public class PurchaseInvoice_DsQb
		extends
			QueryBuilderWithJpql<PurchaseInvoice_Ds, PurchaseInvoice_DsFilter, PurchaseInvoice_DsParam> {

	@Override
	public void beforeBuildWhere() {
		if (this.params != null
				&& this.params.getFilterProductAccountId() != null
				&& !"".equals(this.params.getFilterProductAccountId())) {
			addFilterCondition("  e.id in (select l.invoice.id from PurchaseInvoiceLine l where l.productAccount.id = :filterProductAccountId) ");
			addCustomFilterItem("filterProductAccountId",
					this.params.getFilterProductAccountId());
		}
	}
}
