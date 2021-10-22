import { WrapPageElementBrowserArgs } from 'gatsby';

export type ITemplateProps<T> = WrapPageElementBrowserArgs['props'] & {
    pageContext: {
        isCreatedByStatefulCreatePages: boolean;
    } & T;
};
