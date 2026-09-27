Fråga 1: Varför är .map ett löpande band?
Rad: {todos.map(function (todo).
Varje objekt i todos arryen åker in i funktionen, en i taget, och kommer ut som en <li> på skärmen. Precis som ett löpande band bearbetar samma "station" (funktionen) varje detalj identiskt, en efter en, tills alla är klara.
Utan .map skulle man behöva skriva en <li> manuellt för varje enskild uppgift, vilket inte fungerar när listan är dynamisk. .map gör att samma "mall" automatiskt appliceras på alla element listan, hur många de än är.

Fråga 2: Varför är .filter en sil och inte en kniv?
Rad: function handleRemove(textToRemove) {
const kvar = todos.filter(function (todo) {
return todo !== textToRemove;
});
Hela todos listan hälls "genonm silen". Varje uppgift tests mot villkoret. De som matchar hålls kvar på listan (kvar). Originallistan .todos rörs aldrig, den finns kvar orörd.
En kniv (som splice) skär bort en bit ur samma föremål. Den ändrar originalet direkt (muterar det). En sil skapar istället en helt ny, separat mångd av det som blir kvar. React behöver just detta: en ny array, så att den upptäcker att något ändras och ritar om skärmen. Muterar man origianlt istället ser React ingen skillnad, och inget uppdateras.

    Fråga 3: Vad gör key och vad gör det INTE?
    Rad:  <li key={todo}>
    Om du öppnar webbläsaren konsol syns en varning ifall key saknas. Med key försvinner varningen, och React kan hålla reda på exakt vilket <li> element som hör till vilken uppgift, även när listan ändras.

    key är inte en synlig rubrik eller en text som visas för användaren. Den syns aldrig i webbläsaren. Den är bara en intern "namnbricka" som React använder bakom kuliserna för att spåra vilket element som är vilket mellan omritningar. Utan den vet inte React om en rad flyttas, tagits bort eller är helt ny, vilket kan göra att fel rad uppdateras eller att appen blir långsammare.