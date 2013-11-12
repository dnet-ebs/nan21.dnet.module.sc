/**
 * DNet eBusiness Suite
 * Copyright: 2010-2013 Nan21 Electronics SRL. All rights reserved.
 * Use is subject to license terms.
 */
package net.nan21.dnet.module.sc.presenter.impl.financial.service;

import net.nan21.dnet.core.api.service.presenter.IDsService;
import net.nan21.dnet.core.presenter.service.ds.AbstractEntityDsService;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOut_Ds;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOut_DsFilter;
import net.nan21.dnet.module.sc.presenter.impl.financial.model.PaymentOut_DsParam;
import net.nan21.dnet.module.tx.domain.impl.financial.Payment;

public class PaymentOut_DsService
		extends
			AbstractEntityDsService<PaymentOut_Ds, PaymentOut_DsFilter, PaymentOut_DsParam, Payment>
		implements
			IDsService<PaymentOut_Ds, PaymentOut_DsFilter, PaymentOut_DsParam> {

	@Override
	public void preInsert(PaymentOut_Ds ds, PaymentOut_DsParam params) {
		ds.setDirection("out");
	}
}
