/**
 * @typedef {Categoria}
 * Define as categorias possíveis para um item.
 * Pode ser "2D" ou "3D".
 */
export type Categoria = "2D" | "3D";

/**
 * @typedef {Censura}
 * Define as classificações de censura permitidas para um item.
 * Pode ser "Livre", "10 anos", "12 anos", "14 anos" ou "16 anos".
 */
export type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos" | "18 anos";

/**
 * @interface TagProps
 * Define a estrutura de um objeto TagProps.
 *
 * @property {Categoria | Censura} valor - O valor da tag, que pode ser uma categoria ou uma classificação de censura.
 */
export interface TagProps {
    valor: Categoria | Censura;
}