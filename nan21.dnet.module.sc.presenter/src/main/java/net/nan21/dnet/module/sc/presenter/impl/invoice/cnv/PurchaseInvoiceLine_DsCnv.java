/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.invoice.cnv;

import javax.persistence.EntityManager;
import net.nan21.dnet.core.api.action.result.IDsConverter;
import net.nan21.dnet.core.presenter.converter.AbstractDsConverter;
import net.nan21.dnet.module.md.business.api.mm.IProductService;
import net.nan21.dnet.module.md.business.api.org.IOrgService;
import net.nan21.dnet.module.md.domain.impl.mm.Product;
import net.nan21.dnet.module.md.domain.impl.org.Org;
import net.nan21.dnet.module.sc.presenter.impl.invoice.model.PurchaseInvoiceLine_Ds;
import net.nan21.dnet.module.tx.domain.impl.purchase.PurchaseInvoiceLine;

public class PurchaseInvoiceLine_DsCnv
		extends
			AbstractDsConverter<PurchaseInvoiceLine_Ds, PurchaseInvoiceLine>
		implements
			IDsConverter<PurchaseInvoiceLine_Ds, PurchaseInvoiceLine> {

	protected void modelToEntityReferences(PurchaseInvoiceLine_Ds ds,
			PurchaseInvoiceLine e, boolean isInsert, EntityManager em)
			throws Exception {

		if (ds.getProductId() == null) {
			Product x = ((IProductService) findEntityService(Product.class))
					.findByCode(ds.getProduct());
			ds.setProductId(x.getId());
		}
		if (ds.getCompanyId() == null) {
			Org x = ((IOrgService) findEntityService(Org.class)).findByCode(ds
					.getCompany());
			ds.setCompanyId(x.getId());
		}
		super.modelToEntityReferences(ds, e, isInsert, em);
	}
}
