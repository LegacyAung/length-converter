const unitArray = ['meter', 'feet', 'inch', 'centimeter', 'kilometer', 'mile'];

const factorObj =
{
  metermeter: 1,
  metercentimeter: 100,
  meterfeet: 3.28084,
  meterinch: 39.3701,
  meterkilometer: 0.001,
  metermile: 0.000621371,

  centimetercentimeter: 1,
  centimetermeter: 0.01,
  centimeterfeet: 0.0328084,
  centimeterinch: 0.393701,
  centimeterkilometer: 0.00001,
  centimetermile: 0.00000621371,

  feetfeet: 1,
  feetmeter: 0.3048,
  feetinch: 12,
  feetcentimeter: 30.48,
  feetkilometer: 0.0003048,
  feetmile: 0.000189394,

  inchinch: 1,
  inchmeter: 0.0254,
  inchfeet: 0.08333,
  inchcentimeter: 2.54,
  inchkilometer: 0.0000254,
  inchmile: 0.000015783,

  kilometerkilometer: 1,
  kilometermeter: 1000,
  kilometerinch: 39370.1,
  kilometerfeet: 3280.84,
  kilometercentimeter: 100000,
  kilometermile: 0.621371,

  milemile: 1,
  milemeter: 1609.34,
  mileinch: 63360,
  milefeet: 5280,
  milecentimeter: 160934,
  milekilometer: 1.60934,
}

const idSelect = (id) => document.getElementById(id);

const select1 = idSelect('units'),
      select2 = idSelect('units-two'),
      input1 = idSelect('input-1'),
      input2 = idSelect('input-2'),
      form = idSelect('form');

form.addEventListener('submit', converterEngine);

function converterEngine(e) {
  e.preventDefault();
  conditionalDummy();
};

function converter(units) {
  let inputValue = input1.value * units;
  return input2.value = inputValue;
}

function conditionalDummy() {
  const selectOne = select1.options[select1.selectedIndex].value;
  const selectTwo = select2.options[select2.selectedIndex].value;

  for(let i = 0; i < unitArray.length; i++) {
    if(selectOne === unitArray[i]) {
      for(let v = 0; v < unitArray.length; v++) {
        if(selectTwo === unitArray[v]) {
          let bind = selectOne + selectTwo;
          converter(factorObj[bind]);
        }
      }
    }
  }
}
