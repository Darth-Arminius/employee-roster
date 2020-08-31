if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'EmployeeRoster'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'EmployeeRoster'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'EmployeeRoster'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'EmployeeRoster'.");
}var EmployeeRoster = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Random = Kotlin.kotlin.random.Random;
  var ensureNotNull = Kotlin.ensureNotNull;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var random = Kotlin.kotlin.collections.random_iscd7z$;
  var random_0 = Kotlin.kotlin.collections.random_lj338n$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var setOf = Kotlin.kotlin.collections.setOf_mh5how$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var Unit = Kotlin.kotlin.Unit;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  EmployeeType.prototype = Object.create(Enum.prototype);
  EmployeeType.prototype.constructor = EmployeeType;
  StudyTypes.prototype = Object.create(Enum.prototype);
  StudyTypes.prototype.constructor = StudyTypes;
  Titles.prototype = Object.create(Enum.prototype);
  Titles.prototype.constructor = Titles;
  Roles.prototype = Object.create(Enum.prototype);
  Roles.prototype.constructor = Roles;
  function FullName(title, forename, middleName, surname) {
    this.title = title;
    this.forename = forename;
    this.middleName = middleName;
    this.surname = surname;
  }
  FullName.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FullName',
    interfaces: []
  };
  FullName.prototype.component1 = function () {
    return this.title;
  };
  FullName.prototype.component2 = function () {
    return this.forename;
  };
  FullName.prototype.component3 = function () {
    return this.middleName;
  };
  FullName.prototype.component4 = function () {
    return this.surname;
  };
  FullName.prototype.copy_8ic32p$ = function (title, forename, middleName, surname) {
    return new FullName(title === void 0 ? this.title : title, forename === void 0 ? this.forename : forename, middleName === void 0 ? this.middleName : middleName, surname === void 0 ? this.surname : surname);
  };
  FullName.prototype.toString = function () {
    return 'FullName(title=' + Kotlin.toString(this.title) + (', forename=' + Kotlin.toString(this.forename)) + (', middleName=' + Kotlin.toString(this.middleName)) + (', surname=' + Kotlin.toString(this.surname)) + ')';
  };
  FullName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.forename) | 0;
    result = result * 31 + Kotlin.hashCode(this.middleName) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    return result;
  };
  FullName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.forename, other.forename) && Kotlin.equals(this.middleName, other.middleName) && Kotlin.equals(this.surname, other.surname)))));
  };
  function Education(major, minor, location) {
    this.major = major;
    this.minor = minor;
    this.location = location;
  }
  Education.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Education',
    interfaces: []
  };
  Education.prototype.component1 = function () {
    return this.major;
  };
  Education.prototype.component2 = function () {
    return this.minor;
  };
  Education.prototype.component3 = function () {
    return this.location;
  };
  Education.prototype.copy_6hosri$ = function (major, minor, location) {
    return new Education(major === void 0 ? this.major : major, minor === void 0 ? this.minor : minor, location === void 0 ? this.location : location);
  };
  Education.prototype.toString = function () {
    return 'Education(major=' + Kotlin.toString(this.major) + (', minor=' + Kotlin.toString(this.minor)) + (', location=' + Kotlin.toString(this.location)) + ')';
  };
  Education.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.major) | 0;
    result = result * 31 + Kotlin.hashCode(this.minor) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    return result;
  };
  Education.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.major, other.major) && Kotlin.equals(this.minor, other.minor) && Kotlin.equals(this.location, other.location)))));
  };
  function WorkExperience(role, years) {
    this.role = role;
    this.years = years;
  }
  WorkExperience.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorkExperience',
    interfaces: []
  };
  WorkExperience.prototype.component1 = function () {
    return this.role;
  };
  WorkExperience.prototype.component2 = function () {
    return this.years;
  };
  WorkExperience.prototype.copy_bm4lxs$ = function (role, years) {
    return new WorkExperience(role === void 0 ? this.role : role, years === void 0 ? this.years : years);
  };
  WorkExperience.prototype.toString = function () {
    return 'WorkExperience(role=' + Kotlin.toString(this.role) + (', years=' + Kotlin.toString(this.years)) + ')';
  };
  WorkExperience.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.role) | 0;
    result = result * 31 + Kotlin.hashCode(this.years) | 0;
    return result;
  };
  WorkExperience.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.role, other.role) && Kotlin.equals(this.years, other.years)))));
  };
  function Employee(type, fullName, age, sex, education, workExperience) {
    this.type = type;
    this.fullName = fullName;
    this.age = age;
    this.sex = sex;
    this.education = education;
    this.workExperience = workExperience;
  }
  Employee.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Employee',
    interfaces: []
  };
  Employee.prototype.component1 = function () {
    return this.type;
  };
  Employee.prototype.component2 = function () {
    return this.fullName;
  };
  Employee.prototype.component3 = function () {
    return this.age;
  };
  Employee.prototype.component4 = function () {
    return this.sex;
  };
  Employee.prototype.component5 = function () {
    return this.education;
  };
  Employee.prototype.component6 = function () {
    return this.workExperience;
  };
  Employee.prototype.copy_gehujm$ = function (type, fullName, age, sex, education, workExperience) {
    return new Employee(type === void 0 ? this.type : type, fullName === void 0 ? this.fullName : fullName, age === void 0 ? this.age : age, sex === void 0 ? this.sex : sex, education === void 0 ? this.education : education, workExperience === void 0 ? this.workExperience : workExperience);
  };
  Employee.prototype.toString = function () {
    return 'Employee(type=' + Kotlin.toString(this.type) + (', fullName=' + Kotlin.toString(this.fullName)) + (', age=' + Kotlin.toString(this.age)) + (', sex=' + Kotlin.toString(this.sex)) + (', education=' + Kotlin.toString(this.education)) + (', workExperience=' + Kotlin.toString(this.workExperience)) + ')';
  };
  Employee.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.fullName) | 0;
    result = result * 31 + Kotlin.hashCode(this.age) | 0;
    result = result * 31 + Kotlin.hashCode(this.sex) | 0;
    result = result * 31 + Kotlin.hashCode(this.education) | 0;
    result = result * 31 + Kotlin.hashCode(this.workExperience) | 0;
    return result;
  };
  Employee.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.fullName, other.fullName) && Kotlin.equals(this.age, other.age) && Kotlin.equals(this.sex, other.sex) && Kotlin.equals(this.education, other.education) && Kotlin.equals(this.workExperience, other.workExperience)))));
  };
  function rollForRole(diceRollResult, startingPercentage, percentage, roles) {
    var start = startingPercentage;
    var end = start + percentage - 1 | 0;
    for (var x = 0; x !== roles.size; ++x) {
      if (start <= diceRollResult && diceRollResult <= end) {
        return roles.get_za3lpa$(x);
      } else {
        start = start + percentage | 0;
        end = end + percentage | 0;
      }
    }
    throw Error_init('Failed to find a role');
  }
  function generatePastRoles(maxNumRoles, maxYears, major, minor) {
    var $receiver = studyToRoles;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.studyType === major) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    var majorRoles = firstOrNull$result;
    var $receiver_0 = studyToRoles;
    var firstOrNull$result_0;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.studyType === minor) {
          firstOrNull$result_0 = element_0;
          break firstOrNull$break;
        }}
      firstOrNull$result_0 = null;
    }
     while (false);
    var minorRoles = firstOrNull$result_0;
    var yearsLeft = maxYears;
    var workExperience = ArrayList_init();
    for (var x = 0; x < maxNumRoles; x++) {
      var role;
      var roleDiceRoll = Random.Default.nextInt_vux9f0$(1, 101);
      if (roleDiceRoll >= 1 && roleDiceRoll <= 60) {
        var majorPercentage = 60 / ensureNotNull(majorRoles).roles.size | 0;
        role = rollForRole(roleDiceRoll, 1, majorPercentage, majorRoles.roles);
      } else if (roleDiceRoll >= 61 && roleDiceRoll <= 90) {
        var minorPercentage = 30 / ensureNotNull(minorRoles).roles.size | 0;
        role = rollForRole(roleDiceRoll, 61, minorPercentage, minorRoles.roles);
      } else if (roleDiceRoll >= 91 && roleDiceRoll <= 100) {
        var $receiver_1 = Roles$values();
        var destination = ArrayList_init();
        var tmp$_1;
        for (tmp$_1 = 0; tmp$_1 !== $receiver_1.length; ++tmp$_1) {
          var element_1 = $receiver_1[tmp$_1];
          if (!ensureNotNull(majorRoles).roles.contains_11rb$(element_1) && !ensureNotNull(minorRoles).roles.contains_11rb$(element_1))
            destination.add_11rb$(element_1);
        }
        role = random(destination, Random.Default);
      } else {
        throw Error_init('Failed to roll for role');
      }
      var years = Random.Default.nextInt_vux9f0$(1, yearsLeft + 1 | 0);
      workExperience.add_11rb$(new WorkExperience(role.getFormattedName(), years));
      yearsLeft = yearsLeft - years | 0;
      if (yearsLeft <= 0)
        break;
    }
    return workExperience;
  }
  function generateEmployee(type) {
    var randomSex = Random.Default.nextInt_vux9f0$(0, 2);
    var age = Random.Default.nextInt_vux9f0$(25, 66);
    var title = null;
    var forename;
    var sex;
    if (type === EmployeeType$SCIENTIST_getInstance()) {
      var drRoll = Random.Default.nextInt_vux9f0$(0, 101);
      if (drRoll <= 80)
        title = Titles$DR_getInstance();
    }if (randomSex === 0) {
      title = title != null ? title : random_0(Titles$Companion_getInstance().getMaleTitles(), Random.Default);
      forename = random_0(maleForenames, Random.Default);
      sex = 'Male';
    } else {
      title = title != null ? title : random_0(Titles$Companion_getInstance().getFemaleTitles(), Random.Default);
      forename = random_0(femaleForenames, Random.Default);
      sex = 'Female';
    }
    var middleNameChance = Random.Default.nextInt_vux9f0$(0, 101);
    var middleName = middleNameChance <= 20 ? random_0(middleNames, Random.Default) : null;
    var surname = random_0(surnames, Random.Default);
    var major = random_0(StudyTypes$values(), Random.Default);
    var $receiver = StudyTypes$values();
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (element !== major)
        destination.add_11rb$(element);
    }
    var minor = random(destination, Random.Default);
    var studyLocation = random_0(studyLocations, Random.Default);
    var workExperience = emptyList();
    if (age === 25)
      workExperience = generatePastRoles(1, 1, major, minor);
    else if (age >= 26 && age <= 27)
      workExperience = generatePastRoles(1, 2, major, minor);
    else if (age >= 28 && age <= 30)
      workExperience = generatePastRoles(1, 3, major, minor);
    else if (age >= 30 && age <= 35)
      workExperience = generatePastRoles(2, 5, major, minor);
    else if (age >= 36 && age <= 45)
      workExperience = generatePastRoles(3, 10, major, minor);
    else if (age >= 46 && age <= 65)
      workExperience = generatePastRoles(6, 25, major, minor);
    return new Employee(type, new FullName(title.getFormatterName(), forename, middleName, surname), age, sex, new Education(major.getFormattedName(), minor.getFormattedName(), studyLocation), workExperience);
  }
  function EmployeeType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EmployeeType_initFields() {
    EmployeeType_initFields = function () {
    };
    EmployeeType$SCIENTIST_instance = new EmployeeType('SCIENTIST', 0);
    EmployeeType$ADMINISTRATOR_instance = new EmployeeType('ADMINISTRATOR', 1);
    EmployeeType$SOLDIER_instance = new EmployeeType('SOLDIER', 2);
  }
  var EmployeeType$SCIENTIST_instance;
  function EmployeeType$SCIENTIST_getInstance() {
    EmployeeType_initFields();
    return EmployeeType$SCIENTIST_instance;
  }
  var EmployeeType$ADMINISTRATOR_instance;
  function EmployeeType$ADMINISTRATOR_getInstance() {
    EmployeeType_initFields();
    return EmployeeType$ADMINISTRATOR_instance;
  }
  var EmployeeType$SOLDIER_instance;
  function EmployeeType$SOLDIER_getInstance() {
    EmployeeType_initFields();
    return EmployeeType$SOLDIER_instance;
  }
  EmployeeType.prototype.getFormatterName = function () {
    return capitalize(this.name.toLowerCase());
  };
  EmployeeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmployeeType',
    interfaces: [Enum]
  };
  function EmployeeType$values() {
    return [EmployeeType$SCIENTIST_getInstance(), EmployeeType$ADMINISTRATOR_getInstance(), EmployeeType$SOLDIER_getInstance()];
  }
  EmployeeType.values = EmployeeType$values;
  function EmployeeType$valueOf(name) {
    switch (name) {
      case 'SCIENTIST':
        return EmployeeType$SCIENTIST_getInstance();
      case 'ADMINISTRATOR':
        return EmployeeType$ADMINISTRATOR_getInstance();
      case 'SOLDIER':
        return EmployeeType$SOLDIER_getInstance();
      default:throwISE('No enum constant EmployeeType.' + name);
    }
  }
  EmployeeType.valueOf_61zpoe$ = EmployeeType$valueOf;
  var maleForenames;
  var femaleForenames;
  var studyLocations;
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner'));
      $receiver.unaryPlus_pdl1vz$('Type: ' + closure$scientist.type.getFormatterName());
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$(closure$scientist.fullName.title);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_0(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$(closure$scientist.fullName.forename);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_1(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$(closure$scientist.fullName.middleName);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_2(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$(closure$scientist.fullName.surname);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_0(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner'));
      var block = main$lambda$lambda$lambda$lambda(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      var block_0 = main$lambda$lambda$lambda$lambda_0(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_0));
      if (closure$scientist.fullName.middleName != null) {
        var block_1 = main$lambda$lambda$lambda$lambda_1(closure$scientist);
        visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_1));
      }var block_2 = main$lambda$lambda$lambda$lambda_2(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_2));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_3(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Age: ' + closure$scientist.age);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_4(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Sex: ' + closure$scientist.sex);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_1(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner'));
      var block = main$lambda$lambda$lambda$lambda_3(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      var block_0 = main$lambda$lambda$lambda$lambda_4(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_0));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_5($receiver) {
    set_classes($receiver, setOf('inner'));
    $receiver.unaryPlus_pdl1vz$('Education');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_6(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Major: ' + closure$scientist.education.major);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_7(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Minor: ' + closure$scientist.education.minor);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_8(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Location: ' + closure$scientist.education.location);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_2(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('row'));
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(main$lambda$lambda$lambda$lambda_5));
      var block = main$lambda$lambda$lambda$lambda_6(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      var block_0 = main$lambda$lambda$lambda$lambda_7(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_0));
      var block_1 = main$lambda$lambda$lambda$lambda_8(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_1));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_9($receiver) {
    set_classes($receiver, setOf('inner'));
    $receiver.unaryPlus_pdl1vz$('Past experience');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Role: ' + closure$it.role);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      set_classes($receiver, setOf('inner-row'));
      $receiver.unaryPlus_pdl1vz$('Years: ' + closure$it.years);
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      set_classes($receiver, setOf('container'));
      var block = main$lambda$lambda$lambda$lambda$lambda$lambda(closure$it);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      var block_0 = main$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$it);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_0));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda_3(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('row'));
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(main$lambda$lambda$lambda$lambda_9));
      var tmp$;
      tmp$ = closure$scientist.workExperience.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(main$lambda$lambda$lambda$lambda$lambda(element)));
      }
      return Unit;
    };
  }
  function main$lambda$lambda(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('card'));
      var block = main$lambda$lambda$lambda(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      var block_0 = main$lambda$lambda$lambda_0(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_0));
      var block_1 = main$lambda$lambda$lambda_1(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_1));
      var block_2 = main$lambda$lambda$lambda_2(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_2));
      var block_3 = main$lambda$lambda$lambda_3(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block_3));
      return Unit;
    };
  }
  function main$lambda(closure$scientist) {
    return function ($receiver) {
      set_classes($receiver, setOf('container'));
      var block = main$lambda$lambda(closure$scientist);
      visitTag(new DIV_init(attributesMapOf('class', null), $receiver.consumer), visit$lambda(block));
      return Unit;
    };
  }
  function main() {
    var root = document.getElementById('root');
    var scientist = generateEmployee(EmployeeType$SCIENTIST_getInstance());
    var administrator = generateEmployee(EmployeeType$ADMINISTRATOR_getInstance());
    var soldier = generateEmployee(EmployeeType$SOLDIER_getInstance());
    var $receiver = get_create(document);
    var div = visitTagAndFinalize(new DIV_init(attributesMapOf('class', null), $receiver), $receiver, visitAndFinalize$lambda(main$lambda(scientist)));
    ensureNotNull(root).appendChild(div);
  }
  var middleNames;
  function StudyTypes(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function StudyTypes_initFields() {
    StudyTypes_initFields = function () {
    };
    StudyTypes$ELECTRICAL_ENGINEERING_instance = new StudyTypes('ELECTRICAL_ENGINEERING', 0);
    StudyTypes$CYBERNETICS_instance = new StudyTypes('CYBERNETICS', 1);
    StudyTypes$COMPUTER_SCIENCE_instance = new StudyTypes('COMPUTER_SCIENCE', 2);
    StudyTypes$ROBOTICS_instance = new StudyTypes('ROBOTICS', 3);
    StudyTypes$GENETIC_ENGINEERING_instance = new StudyTypes('GENETIC_ENGINEERING', 4);
    StudyTypes$CHEMICAL_ENGINEERING_instance = new StudyTypes('CHEMICAL_ENGINEERING', 5);
    StudyTypes$PHARMACEUTICALS_instance = new StudyTypes('PHARMACEUTICALS', 6);
    StudyTypes$BIOCHEMISTRY_instance = new StudyTypes('BIOCHEMISTRY', 7);
    StudyTypes$QUANTUM_PHYSICS_instance = new StudyTypes('QUANTUM_PHYSICS', 8);
    StudyTypes$OPTICAL_PHYSICS_instance = new StudyTypes('OPTICAL_PHYSICS', 9);
  }
  var StudyTypes$ELECTRICAL_ENGINEERING_instance;
  function StudyTypes$ELECTRICAL_ENGINEERING_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$ELECTRICAL_ENGINEERING_instance;
  }
  var StudyTypes$CYBERNETICS_instance;
  function StudyTypes$CYBERNETICS_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$CYBERNETICS_instance;
  }
  var StudyTypes$COMPUTER_SCIENCE_instance;
  function StudyTypes$COMPUTER_SCIENCE_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$COMPUTER_SCIENCE_instance;
  }
  var StudyTypes$ROBOTICS_instance;
  function StudyTypes$ROBOTICS_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$ROBOTICS_instance;
  }
  var StudyTypes$GENETIC_ENGINEERING_instance;
  function StudyTypes$GENETIC_ENGINEERING_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$GENETIC_ENGINEERING_instance;
  }
  var StudyTypes$CHEMICAL_ENGINEERING_instance;
  function StudyTypes$CHEMICAL_ENGINEERING_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$CHEMICAL_ENGINEERING_instance;
  }
  var StudyTypes$PHARMACEUTICALS_instance;
  function StudyTypes$PHARMACEUTICALS_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$PHARMACEUTICALS_instance;
  }
  var StudyTypes$BIOCHEMISTRY_instance;
  function StudyTypes$BIOCHEMISTRY_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$BIOCHEMISTRY_instance;
  }
  var StudyTypes$QUANTUM_PHYSICS_instance;
  function StudyTypes$QUANTUM_PHYSICS_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$QUANTUM_PHYSICS_instance;
  }
  var StudyTypes$OPTICAL_PHYSICS_instance;
  function StudyTypes$OPTICAL_PHYSICS_getInstance() {
    StudyTypes_initFields();
    return StudyTypes$OPTICAL_PHYSICS_instance;
  }
  function StudyTypes$getFormattedName$lambda(it) {
    return capitalize(it.toLowerCase());
  }
  StudyTypes.prototype.getFormattedName = function () {
    var tmp$;
    if (contains(this.name, '_')) {
      tmp$ = joinToString(split(this.name, ['_']), ' ', void 0, void 0, void 0, void 0, StudyTypes$getFormattedName$lambda);
    } else {
      tmp$ = capitalize(this.name.toLowerCase());
    }
    return tmp$;
  };
  StudyTypes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyTypes',
    interfaces: [Enum]
  };
  function StudyTypes$values() {
    return [StudyTypes$ELECTRICAL_ENGINEERING_getInstance(), StudyTypes$CYBERNETICS_getInstance(), StudyTypes$COMPUTER_SCIENCE_getInstance(), StudyTypes$ROBOTICS_getInstance(), StudyTypes$GENETIC_ENGINEERING_getInstance(), StudyTypes$CHEMICAL_ENGINEERING_getInstance(), StudyTypes$PHARMACEUTICALS_getInstance(), StudyTypes$BIOCHEMISTRY_getInstance(), StudyTypes$QUANTUM_PHYSICS_getInstance(), StudyTypes$OPTICAL_PHYSICS_getInstance()];
  }
  StudyTypes.values = StudyTypes$values;
  function StudyTypes$valueOf(name) {
    switch (name) {
      case 'ELECTRICAL_ENGINEERING':
        return StudyTypes$ELECTRICAL_ENGINEERING_getInstance();
      case 'CYBERNETICS':
        return StudyTypes$CYBERNETICS_getInstance();
      case 'COMPUTER_SCIENCE':
        return StudyTypes$COMPUTER_SCIENCE_getInstance();
      case 'ROBOTICS':
        return StudyTypes$ROBOTICS_getInstance();
      case 'GENETIC_ENGINEERING':
        return StudyTypes$GENETIC_ENGINEERING_getInstance();
      case 'CHEMICAL_ENGINEERING':
        return StudyTypes$CHEMICAL_ENGINEERING_getInstance();
      case 'PHARMACEUTICALS':
        return StudyTypes$PHARMACEUTICALS_getInstance();
      case 'BIOCHEMISTRY':
        return StudyTypes$BIOCHEMISTRY_getInstance();
      case 'QUANTUM_PHYSICS':
        return StudyTypes$QUANTUM_PHYSICS_getInstance();
      case 'OPTICAL_PHYSICS':
        return StudyTypes$OPTICAL_PHYSICS_getInstance();
      default:throwISE('No enum constant StudyTypes.' + name);
    }
  }
  StudyTypes.valueOf_61zpoe$ = StudyTypes$valueOf;
  var surnames;
  function Titles(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Titles_initFields() {
    Titles_initFields = function () {
    };
    Titles$MR_instance = new Titles('MR', 0);
    Titles$MRS_instance = new Titles('MRS', 1);
    Titles$MISS_instance = new Titles('MISS', 2);
    Titles$MS_instance = new Titles('MS', 3);
    Titles$DR_instance = new Titles('DR', 4);
    Titles$Companion_getInstance();
  }
  var Titles$MR_instance;
  function Titles$MR_getInstance() {
    Titles_initFields();
    return Titles$MR_instance;
  }
  var Titles$MRS_instance;
  function Titles$MRS_getInstance() {
    Titles_initFields();
    return Titles$MRS_instance;
  }
  var Titles$MISS_instance;
  function Titles$MISS_getInstance() {
    Titles_initFields();
    return Titles$MISS_instance;
  }
  var Titles$MS_instance;
  function Titles$MS_getInstance() {
    Titles_initFields();
    return Titles$MS_instance;
  }
  var Titles$DR_instance;
  function Titles$DR_getInstance() {
    Titles_initFields();
    return Titles$DR_instance;
  }
  Titles.prototype.getFormatterName = function () {
    return capitalize(this.name.toLowerCase());
  };
  function Titles$Companion() {
    Titles$Companion_instance = this;
  }
  Titles$Companion.prototype.getMaleTitles = function () {
    return [Titles$MR_getInstance()];
  };
  Titles$Companion.prototype.getFemaleTitles = function () {
    return [Titles$MRS_getInstance(), Titles$MISS_getInstance(), Titles$MS_getInstance()];
  };
  Titles$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Titles$Companion_instance = null;
  function Titles$Companion_getInstance() {
    Titles_initFields();
    if (Titles$Companion_instance === null) {
      new Titles$Companion();
    }return Titles$Companion_instance;
  }
  Titles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Titles',
    interfaces: [Enum]
  };
  function Titles$values() {
    return [Titles$MR_getInstance(), Titles$MRS_getInstance(), Titles$MISS_getInstance(), Titles$MS_getInstance(), Titles$DR_getInstance()];
  }
  Titles.values = Titles$values;
  function Titles$valueOf(name) {
    switch (name) {
      case 'MR':
        return Titles$MR_getInstance();
      case 'MRS':
        return Titles$MRS_getInstance();
      case 'MISS':
        return Titles$MISS_getInstance();
      case 'MS':
        return Titles$MS_getInstance();
      case 'DR':
        return Titles$DR_getInstance();
      default:throwISE('No enum constant Titles.' + name);
    }
  }
  Titles.valueOf_61zpoe$ = Titles$valueOf;
  function Roles(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Roles_initFields() {
    Roles_initFields = function () {
    };
    Roles$CYBERNETICS_SURGEON_instance = new Roles('CYBERNETICS_SURGEON', 0);
    Roles$ROBOTICS_ENGINEER_instance = new Roles('ROBOTICS_ENGINEER', 1);
    Roles$SOFTWARE_DEVELOPER_instance = new Roles('SOFTWARE_DEVELOPER', 2);
    Roles$AI_DEVELOPER_instance = new Roles('AI_DEVELOPER', 3);
    Roles$GENE_SURGEON_instance = new Roles('GENE_SURGEON', 4);
    Roles$PHARMACIST_instance = new Roles('PHARMACIST', 5);
    Roles$BIOCHEMIST_instance = new Roles('BIOCHEMIST', 6);
    Roles$QUANTUM_PHYSICIST_instance = new Roles('QUANTUM_PHYSICIST', 7);
    Roles$LASER_SCIENTIST_instance = new Roles('LASER_SCIENTIST', 8);
  }
  var Roles$CYBERNETICS_SURGEON_instance;
  function Roles$CYBERNETICS_SURGEON_getInstance() {
    Roles_initFields();
    return Roles$CYBERNETICS_SURGEON_instance;
  }
  var Roles$ROBOTICS_ENGINEER_instance;
  function Roles$ROBOTICS_ENGINEER_getInstance() {
    Roles_initFields();
    return Roles$ROBOTICS_ENGINEER_instance;
  }
  var Roles$SOFTWARE_DEVELOPER_instance;
  function Roles$SOFTWARE_DEVELOPER_getInstance() {
    Roles_initFields();
    return Roles$SOFTWARE_DEVELOPER_instance;
  }
  var Roles$AI_DEVELOPER_instance;
  function Roles$AI_DEVELOPER_getInstance() {
    Roles_initFields();
    return Roles$AI_DEVELOPER_instance;
  }
  var Roles$GENE_SURGEON_instance;
  function Roles$GENE_SURGEON_getInstance() {
    Roles_initFields();
    return Roles$GENE_SURGEON_instance;
  }
  var Roles$PHARMACIST_instance;
  function Roles$PHARMACIST_getInstance() {
    Roles_initFields();
    return Roles$PHARMACIST_instance;
  }
  var Roles$BIOCHEMIST_instance;
  function Roles$BIOCHEMIST_getInstance() {
    Roles_initFields();
    return Roles$BIOCHEMIST_instance;
  }
  var Roles$QUANTUM_PHYSICIST_instance;
  function Roles$QUANTUM_PHYSICIST_getInstance() {
    Roles_initFields();
    return Roles$QUANTUM_PHYSICIST_instance;
  }
  var Roles$LASER_SCIENTIST_instance;
  function Roles$LASER_SCIENTIST_getInstance() {
    Roles_initFields();
    return Roles$LASER_SCIENTIST_instance;
  }
  function Roles$getFormattedName$lambda(it) {
    return contains(it, 'AI') ? it.toUpperCase() : capitalize(it.toLowerCase());
  }
  function Roles$getFormattedName$lambda_0(it) {
    return capitalize(it.toLowerCase());
  }
  Roles.prototype.getFormattedName = function () {
    var tmp$;
    if (this.ordinal === Roles$AI_DEVELOPER_getInstance().ordinal)
      tmp$ = joinToString(split(this.name, ['_']), ' ', void 0, void 0, void 0, void 0, Roles$getFormattedName$lambda);
    else if (contains(this.name, '_'))
      tmp$ = joinToString(split(this.name, ['_']), ' ', void 0, void 0, void 0, void 0, Roles$getFormattedName$lambda_0);
    else {
      tmp$ = capitalize(this.name.toLowerCase());
    }
    return tmp$;
  };
  Roles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Roles',
    interfaces: [Enum]
  };
  function Roles$values() {
    return [Roles$CYBERNETICS_SURGEON_getInstance(), Roles$ROBOTICS_ENGINEER_getInstance(), Roles$SOFTWARE_DEVELOPER_getInstance(), Roles$AI_DEVELOPER_getInstance(), Roles$GENE_SURGEON_getInstance(), Roles$PHARMACIST_getInstance(), Roles$BIOCHEMIST_getInstance(), Roles$QUANTUM_PHYSICIST_getInstance(), Roles$LASER_SCIENTIST_getInstance()];
  }
  Roles.values = Roles$values;
  function Roles$valueOf(name) {
    switch (name) {
      case 'CYBERNETICS_SURGEON':
        return Roles$CYBERNETICS_SURGEON_getInstance();
      case 'ROBOTICS_ENGINEER':
        return Roles$ROBOTICS_ENGINEER_getInstance();
      case 'SOFTWARE_DEVELOPER':
        return Roles$SOFTWARE_DEVELOPER_getInstance();
      case 'AI_DEVELOPER':
        return Roles$AI_DEVELOPER_getInstance();
      case 'GENE_SURGEON':
        return Roles$GENE_SURGEON_getInstance();
      case 'PHARMACIST':
        return Roles$PHARMACIST_getInstance();
      case 'BIOCHEMIST':
        return Roles$BIOCHEMIST_getInstance();
      case 'QUANTUM_PHYSICIST':
        return Roles$QUANTUM_PHYSICIST_getInstance();
      case 'LASER_SCIENTIST':
        return Roles$LASER_SCIENTIST_getInstance();
      default:throwISE('No enum constant Roles.' + name);
    }
  }
  Roles.valueOf_61zpoe$ = Roles$valueOf;
  function StudyToRoles(studyType, roles) {
    this.studyType = studyType;
    this.roles = roles;
  }
  StudyToRoles.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StudyToRoles',
    interfaces: []
  };
  StudyToRoles.prototype.component1 = function () {
    return this.studyType;
  };
  StudyToRoles.prototype.component2 = function () {
    return this.roles;
  };
  StudyToRoles.prototype.copy_8hzbc8$ = function (studyType, roles) {
    return new StudyToRoles(studyType === void 0 ? this.studyType : studyType, roles === void 0 ? this.roles : roles);
  };
  StudyToRoles.prototype.toString = function () {
    return 'StudyToRoles(studyType=' + Kotlin.toString(this.studyType) + (', roles=' + Kotlin.toString(this.roles)) + ')';
  };
  StudyToRoles.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.studyType) | 0;
    result = result * 31 + Kotlin.hashCode(this.roles) | 0;
    return result;
  };
  StudyToRoles.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.studyType, other.studyType) && Kotlin.equals(this.roles, other.roles)))));
  };
  var studyToRoles;
  _.FullName = FullName;
  _.Education = Education;
  _.WorkExperience = WorkExperience;
  _.Employee = Employee;
  _.rollForRole_vi6tsm$ = rollForRole;
  _.generatePastRoles_804v4k$ = generatePastRoles;
  _.generateEmployee_pv602g$ = generateEmployee;
  Object.defineProperty(EmployeeType, 'SCIENTIST', {
    get: EmployeeType$SCIENTIST_getInstance
  });
  Object.defineProperty(EmployeeType, 'ADMINISTRATOR', {
    get: EmployeeType$ADMINISTRATOR_getInstance
  });
  Object.defineProperty(EmployeeType, 'SOLDIER', {
    get: EmployeeType$SOLDIER_getInstance
  });
  _.EmployeeType = EmployeeType;
  Object.defineProperty(_, 'maleForenames', {
    get: function () {
      return maleForenames;
    }
  });
  Object.defineProperty(_, 'femaleForenames', {
    get: function () {
      return femaleForenames;
    }
  });
  Object.defineProperty(_, 'studyLocations', {
    get: function () {
      return studyLocations;
    }
  });
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  _.main = main;
  Object.defineProperty(_, 'middleNames', {
    get: function () {
      return middleNames;
    }
  });
  Object.defineProperty(StudyTypes, 'ELECTRICAL_ENGINEERING', {
    get: StudyTypes$ELECTRICAL_ENGINEERING_getInstance
  });
  Object.defineProperty(StudyTypes, 'CYBERNETICS', {
    get: StudyTypes$CYBERNETICS_getInstance
  });
  Object.defineProperty(StudyTypes, 'COMPUTER_SCIENCE', {
    get: StudyTypes$COMPUTER_SCIENCE_getInstance
  });
  Object.defineProperty(StudyTypes, 'ROBOTICS', {
    get: StudyTypes$ROBOTICS_getInstance
  });
  Object.defineProperty(StudyTypes, 'GENETIC_ENGINEERING', {
    get: StudyTypes$GENETIC_ENGINEERING_getInstance
  });
  Object.defineProperty(StudyTypes, 'CHEMICAL_ENGINEERING', {
    get: StudyTypes$CHEMICAL_ENGINEERING_getInstance
  });
  Object.defineProperty(StudyTypes, 'PHARMACEUTICALS', {
    get: StudyTypes$PHARMACEUTICALS_getInstance
  });
  Object.defineProperty(StudyTypes, 'BIOCHEMISTRY', {
    get: StudyTypes$BIOCHEMISTRY_getInstance
  });
  Object.defineProperty(StudyTypes, 'QUANTUM_PHYSICS', {
    get: StudyTypes$QUANTUM_PHYSICS_getInstance
  });
  Object.defineProperty(StudyTypes, 'OPTICAL_PHYSICS', {
    get: StudyTypes$OPTICAL_PHYSICS_getInstance
  });
  _.StudyTypes = StudyTypes;
  Object.defineProperty(_, 'surnames', {
    get: function () {
      return surnames;
    }
  });
  Object.defineProperty(Titles, 'MR', {
    get: Titles$MR_getInstance
  });
  Object.defineProperty(Titles, 'MRS', {
    get: Titles$MRS_getInstance
  });
  Object.defineProperty(Titles, 'MISS', {
    get: Titles$MISS_getInstance
  });
  Object.defineProperty(Titles, 'MS', {
    get: Titles$MS_getInstance
  });
  Object.defineProperty(Titles, 'DR', {
    get: Titles$DR_getInstance
  });
  Object.defineProperty(Titles, 'Companion', {
    get: Titles$Companion_getInstance
  });
  _.Titles = Titles;
  Object.defineProperty(Roles, 'CYBERNETICS_SURGEON', {
    get: Roles$CYBERNETICS_SURGEON_getInstance
  });
  Object.defineProperty(Roles, 'ROBOTICS_ENGINEER', {
    get: Roles$ROBOTICS_ENGINEER_getInstance
  });
  Object.defineProperty(Roles, 'SOFTWARE_DEVELOPER', {
    get: Roles$SOFTWARE_DEVELOPER_getInstance
  });
  Object.defineProperty(Roles, 'AI_DEVELOPER', {
    get: Roles$AI_DEVELOPER_getInstance
  });
  Object.defineProperty(Roles, 'GENE_SURGEON', {
    get: Roles$GENE_SURGEON_getInstance
  });
  Object.defineProperty(Roles, 'PHARMACIST', {
    get: Roles$PHARMACIST_getInstance
  });
  Object.defineProperty(Roles, 'BIOCHEMIST', {
    get: Roles$BIOCHEMIST_getInstance
  });
  Object.defineProperty(Roles, 'QUANTUM_PHYSICIST', {
    get: Roles$QUANTUM_PHYSICIST_getInstance
  });
  Object.defineProperty(Roles, 'LASER_SCIENTIST', {
    get: Roles$LASER_SCIENTIST_getInstance
  });
  _.Roles = Roles;
  _.StudyToRoles = StudyToRoles;
  Object.defineProperty(_, 'studyToRoles', {
    get: function () {
      return studyToRoles;
    }
  });
  maleForenames = ['Alastair', 'Albie', 'Alfie', 'Algernon', 'Angus', 'Archibald', 'Archie', 'Arran', 'Augustine', 'Balthazar', 'Barnaby', 'Basil', 'Bertie', 'Bryn', 'Callum', 'Caspar', 'Caspian', 'Cassian', 'Chester', 'Cian', 'Cillian', 'Conall', 'Constantine', 'Crispin', 'Dawud', 'Digby', 'Duncan', 'Ellis', 'Emrys', 'Ernie', 'Euan', 'Felix', 'Fergus', 'Finlay', 'Fraser', 'Gethin', 'Giles', 'Gregor', 'Griff', 'Guy', 'Hamish', 'Herbert', 'Hugh', 'Hugo', 'Humphrey', 'Huw', 'Inigo', 'Ivor', 'Jago', 'Jasper', 'Jovan', 'Kenzie', 'Kit', 'Lachlan', 'Laird', 'Laith', 'Lewis', 'Lloyd', 'Lorcan', 'Ludo', 'Macsen', 'Montague', 'Montgomery', 'Monty', 'Munro', 'Mylo', 'Ned', 'Niall', 'Nico', 'Nye', 'Ollie', 'Osman', 'Otto', 'Owain', 'Percy', 'Peregrine', 'Piers', 'Rafe', 'Rafferty', 'Reggie', 'Reginald', 'Rex', 'Rhys', 'Robin', 'Rory', 'Roscoe', 'Rupert', 'Rupin', 'Sultan', 'Tarquin', 'Trevor', 'Tudor', 'Vlad', 'Wilbur', 'Wilfred', 'Ziggy'];
  femaleForenames = ['Ailsa', 'Alba', 'Amal', 'Amelia', 'Annabel', 'Anwen', 'Aoife', 'Arabella', 'Araminta', 'Arla', 'Beatrix', 'Bethan', 'Blossom', 'Bobbie', 'Bronwen', 'Bryony', 'Caoimhe', 'Catriona', 'Cerys', 'Clementine', 'Clover', 'Connie', 'Cressida', 'Darcy', 'Dolly', 'Dottie', 'Eilidh', 'Eira', 'Elodie', 'Elsie', 'Elspeth', 'Esme', 'Eugenie', 'Eva', 'Evie', 'Fern', 'Ffion', 'Fleur', 'Flora', 'Florence', 'Freya', 'Georgiana', 'Georgina', 'Gracie', 'Gwendolyn', 'Harriet', 'Hattie', 'Hermione', 'Hettie', 'Honey', 'Honora', 'Ida', 'Imogen', 'Indiana', 'Iona', 'Iris', 'Isla', 'Isobel', 'Jemima', 'Jessamine', 'Jessamy', 'Jocasta', 'Keziah', 'Kitty', 'Lavinia', 'Layla', 'Leonie', 'Lettice', 'Libby', 'Lottie', 'Lowri', 'Lula', 'Maisie', 'Matilda', 'Millie', 'Minnie', 'Nancy', 'Neave', 'Nellie', 'Nicola', 'Ottilie', 'Peggy', 'Persephone', 'Philippa', 'Phoebe', 'Pippa', 'Pixie', 'Poppy', 'Primrose', 'Rhiannon', 'Rhonwen', 'Roisin', 'Romilly', 'Rosie', 'Ruby', 'Saffron', 'Saskia', 'Seren', 'Tabitha', 'Tamsin', 'Tilly', 'Una', 'Verity', 'Winifred', 'Xanthe', 'Zara'];
  studyLocations = ['Massachusetts Institute of Technology (MIT)', 'Stanford University', 'Harvard University', 'California Institute of Technology (Caltech)', 'University of Oxford', 'ETH Zurich (Swiss Federal Institute of Technology)', 'University of Cambridge', 'Imperial College London', 'University of Chicago', 'UCL (University College London)', 'National University of Singapore (NUS)', 'Princeton University', 'Nanyang Technological University, Singapore (NTU)', 'Ecole Polytechnique F\xE9d\xE9rale de Lausanne (EPFL)', 'Tsinghua University', 'University of Pennsylvania', 'Yale University', 'Cornell University', 'Columbia University', 'University of Edinburgh', 'University of Michigan-Ann Arbor', 'University of Hong Kong (UKU)', 'Peking University', 'University of Tokyo', 'Johns Hopkins University', 'University of Toronto', 'Hong Kong University of Science and Technology (HKUST)', 'University of Manchester', 'Northwestern University', 'University of California, Berkeley (UCB)', 'Australian National University', "King's College London", 'McGill University', 'Fudan University', 'New York University (NYU)', 'University of California, Los Angeles (UCLA)', 'Seoul National University', 'Kyoto University', 'KAIST - Korea Advanced Institute of Science & Technology', 'University of Sydney', 'University of Melbourne', 'Duke University', 'Chinese University of Hong Kong (CUHK)', 'University of New South Wales (UNSW Sydney)', 'University of British Columbia', 'University of Queensland', 'Shanghai Jiao Tong University', 'City University of Hong Kong', 'London School of Economics and Political Science (LSE)', 'Technical University of Munich', 'Carnegie Mellon University', 'Universite PSL', 'Zhejiang University', 'University of California, San Diego (UCSD)', 'Monash University', 'Tokyo Institute of Technology', 'Delft University of Technology', 'University of Bristol', 'Universiti Malaya (UM)', 'Brown University', 'University of Amsterdam', 'University of Warwick', 'Ludwig-Maximilians-Universit\xE4t M\xFCnchen', 'Ruprecht-Karls-Universitat Heidelberg', 'University of Wisconsin-Madison', 'National Taiwan University (NTU)', 'Universidad de Buenos Aires (UBA)', 'Ecole Polytechnique', 'Korea University', 'University of Zurich', 'University of Texas at Austin', 'Osaka University', 'University of Washington', 'Lomonosov Moscow State University', 'Hong Kong Polytechnic University', 'University of Copenhagen', 'Pohang University of Science and Technology (POSTECH)', 'University of Glasgow', 'Tohoku University', 'Georgia Institute of Technology', 'University of Auckland', 'University of Illinois at Urbana-Champaign', 'Sorbonne University', 'KU Leuven', 'Durham University', 'Yonsei University', 'University of Birmingham', 'Sungkyunkwan University (SKKU)', 'Rice University', 'University of Southampton', 'University of Leeds', 'University of Western Australia', 'University of Sheffield', 'University of Science and Technology of China', 'University of North Carolina, Chapel Hill', 'University of St Andrews', 'Lund University', 'KTH Royal Institute of Technology', 'University of Nottingham', 'Universidad Nacional Aut\xF3noma de M\xE9xico (UNAM)'];
  middleNames = ['Adair', 'Akira', 'Albany', 'Allegro', 'Almond', 'Amen', 'Anchor', 'Angelou', 'Arden', 'Auburn', 'Austen', 'Avalon', 'Banks', 'Bay', 'Beacon', 'Bean', 'Blaise', 'Bliss', 'Bonanza', 'Boo', 'Brave', 'Cairo', 'Cedar', 'Christmas', 'Cloud', 'Comfort', 'Curry', 'Cypress', 'Day', 'Diversity', 'Dove', 'Drum', 'Early', 'Echo', 'Endeavor', 'Ever', 'Evren', 'Fable', 'Faraday', 'Flame', 'Fortune', 'Free', 'Future', 'Galaxy', 'Galilee', 'Garland', 'Grove', 'Halcyon', 'Halo', 'Harbor', 'Harvest', 'Havana', 'Hero', 'Horizon', 'Indigo', 'Jericho', 'Jubilee', 'Jura', 'Kindred', 'Kismet', 'Legacy', 'Legend', 'Lemon', 'Lior', 'Lorca', 'Loveday', 'Lovelace', 'Lucky', 'Magic', 'Malone', 'March', 'Matisse', 'Meridian', 'Nature', 'Oak', 'Ocean', 'Poe', 'Puck', 'Quebec', 'Quince', 'Reeve', 'Rhythm', 'Rio', 'Rome', 'Rumi', 'Sable', 'Sequoia', 'Shalom', 'Shea', 'Silver', 'Sojourner', 'Solace', 'Sparrow', 'Stellar', 'Story', 'Valentine', 'Veryan', 'Wilde', 'Win', 'Winter', 'Yarrow', 'Zennor', 'Zephyr', 'Zeppelin'];
  surnames = ['Adams', 'Allen', 'Anderson', 'Bailey', 'Baker', 'Barker', 'Barnes', 'Bell', 'Bennett', 'Brown', 'Butler', 'Campbell', 'Carter', 'Chapman', 'Clark', 'Clarke', 'Collins', 'Cook', 'Cooper', 'Corbyn', 'Cox', 'Davies', 'Davis', 'Edwards', 'Ellis', 'Evans', 'Fisher', 'Foster', 'Gibson', 'Graham', 'Gray', 'Green', 'Griffiths', 'Hall', 'Harris', 'Harrison', 'Harvey', 'Hill', 'Holmes', 'Hughes', 'Hunt', 'Jackson', 'James', 'Jenkins', 'Johnson', 'Jones', 'Kelly', 'King', 'Knight', 'Lee', 'Lewis', 'Lloyd', 'Marshall', 'Martin', 'Mason', 'Matthews', 'Miller', 'Mills', 'Mitchell', 'Moore', 'Morgan', 'Morris', 'Murphy', 'Murray', 'Owen', 'Palmer', 'Parker', 'Patel', 'Phillips', 'Powell', 'Price', 'Reid', 'Richards', 'Richardson', 'Roberts', 'Robertson', 'Robinson', 'Rogers', 'Russell', 'Scott', 'Shaw', 'Simpson', 'Smith', 'Stewart', 'Taylor', 'Thomas', 'Thompson', 'Thomson', 'Turner', 'Walker', 'Ward', 'Watson', 'Webb', 'White', 'Wilkinson', 'Williams', 'Wilson', 'Wood', 'Wright', 'Young'];
  studyToRoles = listOf([new StudyToRoles(StudyTypes$ELECTRICAL_ENGINEERING_getInstance(), listOf([Roles$CYBERNETICS_SURGEON_getInstance(), Roles$ROBOTICS_ENGINEER_getInstance()])), new StudyToRoles(StudyTypes$CYBERNETICS_getInstance(), listOf([Roles$CYBERNETICS_SURGEON_getInstance(), Roles$ROBOTICS_ENGINEER_getInstance(), Roles$SOFTWARE_DEVELOPER_getInstance()])), new StudyToRoles(StudyTypes$COMPUTER_SCIENCE_getInstance(), listOf([Roles$ROBOTICS_ENGINEER_getInstance(), Roles$SOFTWARE_DEVELOPER_getInstance(), Roles$AI_DEVELOPER_getInstance()])), new StudyToRoles(StudyTypes$ROBOTICS_getInstance(), listOf([Roles$ROBOTICS_ENGINEER_getInstance(), Roles$CYBERNETICS_SURGEON_getInstance()])), new StudyToRoles(StudyTypes$GENETIC_ENGINEERING_getInstance(), listOf([Roles$GENE_SURGEON_getInstance(), Roles$BIOCHEMIST_getInstance()])), new StudyToRoles(StudyTypes$CHEMICAL_ENGINEERING_getInstance(), listOf([Roles$BIOCHEMIST_getInstance(), Roles$PHARMACIST_getInstance()])), new StudyToRoles(StudyTypes$PHARMACEUTICALS_getInstance(), listOf([Roles$PHARMACIST_getInstance(), Roles$BIOCHEMIST_getInstance()])), new StudyToRoles(StudyTypes$BIOCHEMISTRY_getInstance(), listOf([Roles$BIOCHEMIST_getInstance(), Roles$PHARMACIST_getInstance()])), new StudyToRoles(StudyTypes$QUANTUM_PHYSICS_getInstance(), listOf([Roles$QUANTUM_PHYSICIST_getInstance(), Roles$SOFTWARE_DEVELOPER_getInstance(), Roles$AI_DEVELOPER_getInstance()])), new StudyToRoles(StudyTypes$OPTICAL_PHYSICS_getInstance(), listOf([Roles$LASER_SCIENTIST_getInstance(), Roles$ROBOTICS_ENGINEER_getInstance(), Roles$CYBERNETICS_SURGEON_getInstance()]))]);
  main();
  Kotlin.defineModule('EmployeeRoster', _);
  return _;
}(typeof EmployeeRoster === 'undefined' ? {} : EmployeeRoster, kotlin, this['kotlinx-html-js']);
