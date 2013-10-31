/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.invoice.cnv;

import javax.persistence.EntityManager;
import net.nan21.dnet.core.api.action.result.IDsConverter;
import net.nan21.dnet.core.presenter.converter.AbstractDsConverter;
import net.nan21.dnet.module.md.business.api.bp.IBusinessPartnerService;
import net.nan21.dnet.module.md.domain.impl.bp.BusinessPartner;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoice_Ds;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseInvoice;

public class PurchaseInvoice_DsCnv
		extends
			AbstractDsConverter<PurchaseInvoice_Ds, PurchaseInvoice>
		implements
			IDsConverter<PurchaseInvoice_Ds, PurchaseInvoice> {

	protected void modelToEntityReferences(PurchaseInvoice_Ds ds,
			PurchaseInvoice e, boolean isInsert, EntityManager em)
			throws Exception {

		if (ds.getBpartnerId() == null) {
			BusinessPartner x = ((IBusinessPartnerService) findEntityService(BusinessPartner.class))
					.findByCode(ds.getBpartner());
			ds.setBpartnerId(x.getId());
		}
		super.modelToEntityReferences(ds, e, isInsert, em);
	}
}
