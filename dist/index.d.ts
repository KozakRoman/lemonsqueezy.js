declare class LemonSqueezy {
    constructor(apiKey: any);
    apiKey: any;
    apiUrl: string;
    /**
     * Builds a params object for the API query based on provided and allowed filters.
     * Also converts pagination parameters `page` to `page[number]` and `perPage` to `page[size]`
     * @params {Object} [args] Arguments to the API method
     * @params {string[]} [allowedFilters] List of filters the API query permits (camelCase)
     */
    buildParams(args: any, allowedFilters?: any[]): {
        include: any;
        'page[number]': any;
        'page[size]': any;
    };
    /**
     * Base API query
     * @param {string} path
     * @param {string} [method] POST, GET, PATCH, DELETE
     * @param {Object} [params] URL query parameters
     * @param {Object} [payload] Object/JSON payload
     * @returns {Object} JSON
     */
    queryApi({ path, method, params, payload }: string): Object;
    /**
     * Get current user
     * @returns {Object} JSON
     */
    getUser(): Object;
    /**
     * Get stores
     * @param {Object} [params]
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"products,discounts,license-keys,subscriptions,webhooks"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getStores(params?: {
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "products,discounts,license-keys,subscriptions,webhooks" | undefined;
    } | undefined): Object;
    /**
     * Get a store
     * @param {Object} params
     * @param {number} params.id
     * @param {"products,discounts,license-keys,subscriptions,webhooks"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getStore({ id, ...params }?: {
        id: number;
        include?: "products,discounts,license-keys,subscriptions,webhooks" | undefined;
    }): Object;
    /**
     * Get products
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter products by store
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,variants"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getProducts(params?: {
        storeId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,variants" | undefined;
    } | undefined): Object;
    /**
     * Get a product
     * @param {Object} params
     * @param {number} params.id
     * @param {"store,variants"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getProduct({ id, ...params }?: {
        id: number;
        include?: "store,variants" | undefined;
    }): Object;
    /**
     * Get variants
     * @param {Object} [params]
     * @param {number} [params.productId] Filter variants by product
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"product,files"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getVariants(params?: {
        productId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "product,files" | undefined;
    } | undefined): Object;
    /**
     * Get a variant
     * @param {Object} params
     * @param {number} params.id
     * @param {product,files} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getVariant({ id, ...params }?: {
        id: number;
    }): Object;
    /**
     * Get checkouts
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter variants by store
     * @param {number} [params.variantId] Filter checkouts by variant
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getCheckouts(params?: {
        storeId?: number | undefined;
        variantId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,variant" | undefined;
    } | undefined): Object;
    /**
     * Get a checkout
     * @param {Object} params
     * @param {string} params.id
     * @param {"store,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getCheckout({ id, ...params }?: {
        id: string;
        include?: "store,variant" | undefined;
    }): Object;
    /**
     * Create a checkout
     * @param {Object} params
     * @param {number} params.storeId
     * @param {number} params.variantId
     * @param {Object} [params.attributes] An object of values used to configure the checkout
     *                              https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
     * @returns {Object} JSON
     */
    createCheckout({ storeId, variantId, attributes }?: {
        storeId: number;
        variantId: number;
        attributes?: Object | undefined;
    }): Object;
    /**
     * Get customers
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter customers by store
     * @param {number} [params.email] Filter customers by email address
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"license-keys,orders,store,subscriptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getCustomers(params?: {
        storeId?: number | undefined;
        email?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "license-keys,orders,store,subscriptions" | undefined;
    } | undefined): Object;
    /**
     * Get a customer
     * @param {Object} params
     * @param {number} params.id
     * @param {"license-keys,orders,store,subscriptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getCustomer({ id, ...params }?: {
        id: number;
        include?: "license-keys,orders,store,subscriptions" | undefined;
    }): Object;
    /**
     * Get orders
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter orders by store
     * @param {number} [params.userEmail] Filter orders by email address
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"customer,discount-redemptions,license-keys,order-items,store,subscriptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getOrders(params?: {
        storeId?: number | undefined;
        userEmail?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "customer,discount-redemptions,license-keys,order-items,store,subscriptions" | undefined;
    } | undefined): Object;
    /**
     * Get an order
     * @param {Object} params
     * @param {number} params.id
     * @param {"customer,discount-redemptions,license-keys,order-items,store,subscriptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getOrder({ id, ...params }?: {
        id: number;
        include?: "customer,discount-redemptions,license-keys,order-items,store,subscriptions" | undefined;
    }): Object;
    /**
     * Get files
     * @param {Object} [params]
     * @param {number} [params.variantId] Filter orders by variant
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getFiles(params?: {
        variantId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "variant" | undefined;
    } | undefined): Object;
    /**
     * Get a file
     * @param {Object} params
     * @param {number} params.id
     * @param {"variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getFile({ id, ...params }?: {
        id: number;
        include?: "variant" | undefined;
    }): Object;
    /**
     * Get order items
     * @param {Object} [params]
     * @param {number} [params.orderId] Filter order items by order
     * @param {number} [params.productId] Filter order items by product
     * @param {number} [params.variantId] Filter order items by variant
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"order,product,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getOrderItems(params?: {
        orderId?: number | undefined;
        productId?: number | undefined;
        variantId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "order,product,variant" | undefined;
    } | undefined): Object;
    /**
     * Get an order item
     * @param {Object} params
     * @param {number} params.id
     * @param {"order,product,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getOrderItem({ id, ...params }?: {
        id: number;
        include?: "order,product,variant" | undefined;
    }): Object;
    /**
     * Get subscriptions
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter subscriptions by store
     * @param {number} [params.orderId] Filter subscriptions by order
     * @param {number} [params.orderItemId] Filter subscriptions by order item
     * @param {number} [params.productId] Filter subscriptions by product
     * @param {number} [params.variantId] Filter subscriptions by variant
     * @param {"on_trial"|"active"|"paused"|"past_due"|"unpaid"|"cancelled"|"expired"} [params.status] Filter subscriptions by status
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,customer,order,order-item,product,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getSubscriptions(params?: {
        storeId?: number | undefined;
        orderId?: number | undefined;
        orderItemId?: number | undefined;
        productId?: number | undefined;
        variantId?: number | undefined;
        status?: "on_trial" | "active" | "paused" | "past_due" | "unpaid" | "cancelled" | "expired" | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,customer,order,order-item,product,variant" | undefined;
    } | undefined): Object;
    /**
     * Get a subscription
     * @param {Object} params
     * @param {number} params.id
     * @param {"store,customer,order,order-item,product,variant"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getSubscription({ id, ...params }?: {
        id: number;
        include?: "store,customer,order,order-item,product,variant" | undefined;
    }): Object;
    /**
     * Update a subscription's plan
     * @param {Object} params
     * @param {number} params.id
     * @param {number} [params.variantId] ID of variant (required if changing plans)
     * @param {number} [params.productId] ID of product (required if changing plans)
     * @param {number} [params.billingAnchor] Set the billing day (1–31) used for renewal charges
     * @param {"immediate"|"disable"} [params.proration] If not included, proration will occur at the next renewal date.
     *                                   Use 'immediate' to charge a prorated amount immediately.
     *                                   Use 'disable' to charge a full ammount immediately.
     * @returns {Object} JSON
     */
    updateSubscription({ id, variantId, productId, billingAnchor, proration }?: {
        id: number;
        variantId?: number | undefined;
        productId?: number | undefined;
        billingAnchor?: number | undefined;
        proration?: "immediate" | "disable" | undefined;
    }): Object;
    /**
     * Cancel a subscription
     * @param {Object} params
     * @param {number} params.id
     * @returns {Object} JSON
     */
    cancelSubscription({ id }: {
        id: number;
    }): Object;
    /**
     * Resume (un-cancel) a subscription
     * @param {Object} params
     * @param {number} params.id
     * @returns {Object} JSON
     */
    resumeSubscription({ id }: {
        id: number;
    }): Object;
    /**
     * Pause a subscription
     * @param {Object} params
     * @param {number} params.id
     * @param {"void"|"free"} [params.mode] Pause mode: "void" (default) or "free"
     * @param {string} [params.resumesAt] Date to automatically resume the subscription (ISO 8601 format)
     * @returns {Object} JSON
     */
    pauseSubscription({ id, mode, resumesAt }?: {
        id: number;
        mode?: "void" | "free" | undefined;
        resumesAt?: string | undefined;
    }): Object;
    /**
     * Unpause a subscription
     * @param {Object} params
     * @param {number} params.id
     * @returns {Object} JSON
     */
    unpauseSubscription({ id }: {
        id: number;
    }): Object;
    /**
     * Get subscription invoices
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter subscription invoices by store
     * @param {"paid"|"pending"|"void"|"refunded"} [params.status] Filter subscription invoices by status
     * @param {boolean} [params.refunded] Filter subscription invoices by refunded
     * @param {number} [params.subscriptionId] Filter subscription invoices by subscription
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,subscription"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getSubscriptionInvoices(params?: {
        storeId?: number | undefined;
        status?: "void" | "paid" | "pending" | "refunded" | undefined;
        refunded?: boolean | undefined;
        subscriptionId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,subscription" | undefined;
    } | undefined): Object;
    /**
     * Get a subscription invoice
     * @param {Object} params
     * @param {number} params.id
     * @param {"store,subscription"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getSubscriptionInvoice({ id, ...params }?: {
        id: number;
        include?: "store,subscription" | undefined;
    }): Object;
    /**
     * Get discounts
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter discounts by store
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,variants,discount-redemptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getDiscounts(params?: {
        storeId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,variants,discount-redemptions" | undefined;
    } | undefined): Object;
    /**
     * Get a discount
     * @param {Object} params
     * @param {number} params.id
     * @param {"store,variants,discount-redemptions"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getDiscount({ id, ...params }?: {
        id: number;
        include?: "store,variants,discount-redemptions" | undefined;
    }): Object;
    /**
     * Create a discount
     * @param {Object} params
     * @param {number} params.storeId Store to create a discount in
     * @param {string} params.name Name of discount
     * @param {string} params.code Discount code (uppercase letters and numbers, between 3 and 256 characters)
     * @param {number} params.amount Amount discount code is for
     * @param {"percent"|"fixed"} [params.amountType] Type of discount
     * @param {"once"|"repeating"|"forever"} [params.duration] Duration of discount
     * @param {number} [params.durationInMonths] Number of months to repeat the discount for
     * @param {number[]} [params.variantIds] Limit the discount to certain variants
     * @param {number} [params.maxRedemptions] Limit the total number of redemptions allowed
     * @param {number} [params.startsAt] Date the discount code starts on (ISO 8601 format)
     * @param {number} [params.expiresAt] Date the discount code expires on (ISO 8601 format)
     * @returns {Object} JSON
     */
    createDiscount({ storeId, name, code, amount, amountType, duration, durationInMonths, variantIds, maxRedemptions, startsAt, expiresAt }: {
        storeId: number;
        name: string;
        code: string;
        amount: number;
        amountType?: "percent" | "fixed" | undefined;
        duration?: "once" | "repeating" | "forever" | undefined;
        durationInMonths?: number | undefined;
        variantIds?: number[] | undefined;
        maxRedemptions?: number | undefined;
        startsAt?: number | undefined;
        expiresAt?: number | undefined;
    }): Object;
    /**
     * Delete a discount
     * @param {Object} params
     * @param {number} params.id
     */
    deleteDiscount({ id }: {
        id: number;
    }): Promise<void>;
    /**
     * Get discount redemptions
     * @param {Object} [params]
     * @param {number} [params.discountId] Filter discount redemptions by discount
     * @param {number} [params.orderId] Filter discount redemptions by order
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"discount,order"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getDiscountRedemptions(params?: {
        discountId?: number | undefined;
        orderId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "discount,order" | undefined;
    } | undefined): Object;
    /**
     * Get a discount redemption
     * @param {Object} params
     * @param {number} params.id
     * @param {"discount,order"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getDiscountRedemption({ id, ...params }?: {
        id: number;
        include?: "discount,order" | undefined;
    }): Object;
    /**
     * Get license keys
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter license keys by store
     * @param {number} [params.orderId] Filter license keys by order
     * @param {number} [params.orderItemId] Filter license keys by order item
     * @param {number} [params.productId] Filter license keys by product
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store,customer,order,order-item,product,license-key-instances"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getLicenseKeys(params?: {
        storeId?: number | undefined;
        orderId?: number | undefined;
        orderItemId?: number | undefined;
        productId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store,customer,order,order-item,product,license-key-instances" | undefined;
    } | undefined): Object;
    /**
     * Get a license key
     * @param {Object} params
     * @param {number} params.id
     * @param {"store,customer,order,order-item,product,license-key-instances"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getLicenseKey({ id, ...params }?: {
        id: number;
        include?: "store,customer,order,order-item,product,license-key-instances" | undefined;
    }): Object;
    /**
     * Get license key instances
     * @param {Object} [params]
     * @param {number} [params.licenseKeyId] Filter license keys instances by license key
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"license-key"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getLicenseKeyInstances(params?: {
        licenseKeyId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "license-key" | undefined;
    } | undefined): Object;
    /**
     * Get a license key instance
     * @param {Object} params
     * @param {number} params.id
     * @param {"license-key"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getLicenseKeyInstance({ id, ...params }?: {
        id: number;
        include?: "license-key" | undefined;
    }): Object;
    /**
     * Get webhooks
     * @param {Object} [params]
     * @param {number} [params.storeId] Filter webhooks by store
     * @param {number} [params.perPage] Number of records to return (between 1 and 100)
     * @param {number} [params.page] Page of records to return
     * @param {"store"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getWebhooks(params?: {
        storeId?: number | undefined;
        perPage?: number | undefined;
        page?: number | undefined;
        include?: "store" | undefined;
    } | undefined): Object;
    /**
     * Get a webhook
     * @param {Object} params
     * @param {number} params.id
     * @param {"store"} [params.include] Comma-separated list of record types to include
     * @returns {Object} JSON
     */
    getWebhook({ id, ...params }?: {
        id: number;
        include?: "store" | undefined;
    }): Object;
    /**
     * Create a webhook
     * @param {Object} params
     * @param {string} params.storeId The ID of the store the webhook is for
     * @param {string} params.url Endpoint URL that the webhooks should be sent to
     * @param {string[]} params.events List of webhook events to receive
     * @param {string} params.secret Signing secret (between 6 and 40 characters)
     * @returns {Object} JSON
     */
    createWebhook({ storeId, url, events, secret }?: {
        storeId: string;
        url: string;
        events: string[];
        secret: string;
    }): Object;
    /**
     * Update a webhook
     * @param {Object} params
     * @param {number} params.id
     * @param {string} [params.url] Endpoint URL that the webhooks should be sent to
     * @param {string[]} [params.events] List of webhook events to receive
     * @param {string} [params.secret] Signing secret (between 6 and 40 characters)
     * @returns {Object} JSON
     */
    updateWebhook({ id, url, events, secret }?: {
        id: number;
        url?: string | undefined;
        events?: string[] | undefined;
        secret?: string | undefined;
    }): Object;
    /**
     * Delete a webhook
     * @param {Object} params
     * @param {number} params.id
     */
    deleteWebhook({ id }: {
        id: number;
    }): Promise<void>;
}

export { LemonSqueezy as default };
