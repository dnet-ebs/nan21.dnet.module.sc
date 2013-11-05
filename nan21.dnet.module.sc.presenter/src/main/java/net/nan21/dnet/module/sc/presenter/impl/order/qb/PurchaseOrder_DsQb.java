/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.qb;

import net.nan21.dnet.core.presenter.action.query.QueryBuilderWithJpql;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_Ds;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_DsFilter;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_DsParam;

import net.nan21.dnet.core.api.session.Session;

public class PurchaseOrder_DsQb
		extends
			QueryBuilderWithJpql<PurchaseOrder_Ds, PurchaseOrder_DsFilter, PurchaseOrder_DsParam> {

	@Override
	public void beforeBuildWhere() {
		if (this.params != null
				&& this.params.getFilterProductAccountId() != null
				&& !"".equals(this.params.getFilterProductAccountId())) {
			addFilterCondition("  e.id in (select l.order.id from PurchaseOrderLine l where l.productAccount.id = :filterProductAccountId and l.clientId =:clientId ) ");
			addCustomFilterItem("filterProductAccountId",
					this.params.getFilterProductAccountId());
		}
	}
}
