# Form CV

- [Descrizione widget](#descrizione-widget)
- [Librerie](#librerie)
- [Query string](#query-string)

## Descrizione widget

Si tratta di un widget FileMaker per renderizzare un form di compilazione di un CV nel formato richiesto da FSE+.

Ved. ticket JIRA: [TFSE2022-4723](https://performersrl.atlassian.net/browse/TFSE2022-4723)

## Librerie

| Libreria                                                                                    | versione | uso                                                                       |
| ------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------- |
| [React](https://it.legacy.reactjs.org/)                                                     | 18.3.1   |                                                                           |
| [React Hook Form](https://react-hook-form.com/)                                             | 7.52.1   | gestione del form di compilazione                                         |
| [d3.js](https://d3js.org/)                                                                  | 7.9.0    | usato per aggregare i comuni in province a partire dal file `comuni.json` |
| [bootstrap-italia](https://italia.github.io/bootstrap-italia/docs/componenti/introduzione/) | 2.8.8    | UI/UX                                                                     |
| [design-react-kit](https://github.com/italia/design-react-kit?tab=readme-ov-file)           | 5.1.0    | UI/UX                                                                     |

## Query string

La pagina deve essere chiamata con la seguente query string:

| parametro                            | obbligatorio | uso                                                          | const      |
| ------------------------------------ | ------------ | ------------------------------------------------------------ | ---------- |
| `dev=1`                              | no           | per attivare DEVMODE                                         | `DEVMODE`  |
| `FMScript = {nome script FileMaker}` | sì           | rappresenta lo script di backend con cui la pagina colloquia | `DEVMODE`  |
| `new=1`                              | no           | per creare un nuovo CV                                       | `NEW`      |
| `id={iduu}`                          | no           | edit di un CV esistente                                      | `ID`       |
| `readonly={1/0}`                     | no           | per impostare il form in modalità readonly                   | `READONLY` |

I parametyri `id` e `readonly` vanno sempre insieme e sono alternativi a `new`.

I parametri di chiamata sono salvati nelle costanti globali indicate nella quarta colonna.
