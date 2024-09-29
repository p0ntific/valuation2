import { Any, AnyObject } from "@/types";

export type IFiltersValues = Record<string, Any>;
export type IResponseBase = Record<string, Any>;

export type IFiltersActivenessExtraParams = AnyObject | undefined;
export type IFiltersSubmitParams<V extends IFiltersValues> = Pick<
    IFiltersContextValue<V>,
    "values" | "fieldsMeta"
>;

export interface IFiltersFieldMeta {
    /** Флаг, показывающий, что поле активно (показывается и отправляется) */
    isActive: boolean;
    /** Флаг, показывающий, что значение поля отличается от дефолтного */
    isTouched: boolean;
}

export type IFiltersFieldsMeta<V extends IFiltersValues> = Record<
    keyof V,
    IFiltersFieldMeta
>;

export interface IUseFiltersProps<V extends IFiltersValues> {
    /** Список всех доступных полей в виде массива */
    availableFields: (keyof V)[];
    /** Дефолтные значения, к которым будут сбрасываться фильтры */
    defaultValues: V;
    /** отрабатывает на сабмите */
    onSubmit?(params: IFiltersSubmitParams<V>): void | Promise<void>;
    /**
     * Начальные значения, выставляемые, например, в результате парсинга параметров страницы.
     * Если не переданы, в качестве начальных будут использованы дефолтные значения.
     */
    initialValues?: V;
}

export interface IFiltersContextValue<
    V extends IFiltersValues = IFiltersValues,
    T extends IResponseBase = IResponseBase,
> {
    values: V;
    defaultValues: V;
    fieldsMeta: IFiltersFieldsMeta<V>;
    handleFieldChange(name: keyof V, value: V[keyof V]): void;
    handleFieldChangeMeta(
        name: keyof V,
        meta: Partial<IFiltersFieldMeta>,
    ): void;
    response: T | null;
    setResponse: (res: T) => void;
    handleSubmit(customParams?: AnyObject): void | Promise<void>;
    handleReset(): void | Promise<void>;
}

export interface IFieldInfo<V extends IFiltersValues, N extends keyof V> {
    value: V[N];
    defaultValue: V[N];
    onChange: (value: V[N]) => void;
    setActive: (value: boolean) => void;
    isError: boolean;
    isActive: boolean;
    isTouched: boolean;
    meta: IFiltersFieldMeta;
}

export interface IFieldGroupInfo<
    V extends IFiltersValues,
    N extends (keyof V)[],
> {
    fields: {
        [name in N[number]]: IFieldInfo<V, name>;
    };
    /** Флаг, показывающий, что хотя бы одно поле группы активно (показывается и отправляется) */
    isActive: boolean;
    /** Флаг, показывающий, что значение хотя бы одного поля группы отличается от дефолтного */
    isTouched: boolean;
}

export interface IFiltersProviderProps<V extends IFiltersValues> {
    children?: React.ReactNode;
    contextValue: IFiltersContextValue<V>;
}
