/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.order.cnv;

import javax.persistence.EntityManager;
import net.nan21.dnet.core.api.action.result.IDsConverter;
import net.nan21.dnet.core.presenter.converter.AbstractDsConverter;
import net.nan21.dnet.module.md.business.api.bp.IBusinessPartnerService;
import net.nan21.dnet.module.md.domain.impl.bp.BusinessPartner;
import net.nan21.dnet.module.sc.presenter.impl.order.model.PurchaseOrder_Ds;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseOrder;

public class PurchaseOrder_DsCnv
		extends
			AbstractDsConverter<PurchaseOrder_Ds, PurchaseOrder>
		implements
			IDsConverter<PurchaseOrder_Ds, PurchaseOrder> {

	protected void modelToEntityReferences(PurchaseOrder_Ds ds,
			PurchaseOrder e, boolean isInsert, EntityManager em)
			throws Exception {

		if (ds.getBpartnerId() == null) {
			BusinessPartner x = ((IBusinessPartnerService) findEntityService(BusinessPartner.class))
					.findByCode(ds.getBpartner());
			ds.setBpartnerId(x.getId());
		}
		super.modelToEntityReferences(ds, e, isInsert, em);
	}
}
