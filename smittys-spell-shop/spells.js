const spellbook = document.querySelector("#spell-list");
const schoolSelector = document.querySelector("#school-selector");

const getSpellsBySchool = async (school) => {
  spellbook.innerHTML = "";
  const url = school ? `https://www.dnd5eapi.co/api/spells?school=${school}` : `https://www.dnd5eapi.co/api/spells`;
  const resp = await axios.get(url);
  const spells = resp.data.results;

  for(let i=0; i<spells.length; i++){
    let spellName = spells[i].name;
    let spellLevel = spells[i].level ? spells[i].level : "cantrip";

    spellbook.innerHTML += `
      <div class="spell">
        <p>${spellName}</p>
        <p>Level: ${spellLevel}</p>
      </div>
    `;
  }
}

schoolSelector.addEventListener("change", () => {
  const school = schoolSelector.value;
  getSpellsBySchool(school);
});