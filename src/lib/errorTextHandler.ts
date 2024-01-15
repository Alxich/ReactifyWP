export const errorTextHandler = (
  error: "PageNumberNav" | "NotSpecifiedButtonNav" | "NoErrorFound",
  data?: string | number | Array<any> | Object,
) => {
  const errorsArray = [
    {
      type: "PageNumberNav",
      text: `\n|===> 
| Hey user!
| You know that is not allowed to place ${
        data ? data : "'I don't know what data must be there! Provide please'"
      } in your current page number!
| Please check your code and fix it.
| Code will fix by itself this time.
| Thanks.
|===>
`,
    },
    {
      type: "NoErrorFound",
      text: `\n|===> 
| Hey user!
| Did you know this type of error not exist ?
| Please check your code and fix it.
| Code will not fix by itself this time because it just not possible fix that is not exist there.
| Thanks, wish you luck to find out what happened ;).
|===>
  `,
    },
    {
      type: "NotSpecifiedButtonNav",
      text: `\n|===> 
| Hey user!
| Did you know this component need more props to exist ?
| Please check your code and fix it.
| Code will not fix by itself this time but will hide the broken elements.
| Notice: Provide only one previous or next prors to true if not you will see same error.
| Thanks, wish you luck to find out what happened ;).
|===>
`,
    },
  ];

  const showErrorText = (error: string) =>
    errorsArray.find(({ type }) => type === error)?.text;

  console.error(
    showErrorText(error) ? showErrorText(error) : showErrorText("NoErrorFound"),
  );
};
