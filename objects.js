//^ OBJECTS
var person1 = {
  firstname: "POURYA",
  lastname: "SOLEIMANI",
};

var person2 = new Object({ firstname: "MOHAMMAD", lastname: "YOUSEFI" });

person2.age = 32;
person2.job = "ANGULAR DEVELOPER";

console.log({ person1, person2 });

// FUNCTIONS IN OBJECTS
const post = {
  title: "POST TITLE",
  views: 0,
  updateViews: function () {
    return post.views++;
  },
};

console.log({ views: post.views });

post.updateViews();

console.log({ views: post.views });

post.updateViews();

console.log({ views: post.views });

// OBJECT CONSTRUCTORS ========================================================================

class Course {
  constructor(title, teacher, level, isActive, views) {
    ((this.title = title),
      (this.teacher = teacher),
      (this.level = level),
      (this.isActive = isActive),
      (this.views = views),
      (this.updateViews = function () {
        return ++this.views;
      }));
  }
}

var Course1 = new Course("JAVASCRIPT", "MOHAMMAD HASHEMI", 1, true, 0);

var Course2 = new Course("PYTHON", "AMIRHOSEIN AMIRI", 2, true, 110);

var Course3 = new Course("HTML__CSS", "MILAD DEHYAMI", 2, true, 120);

console.log({ Course1, Course2, Course3 });

class Car {
  constructor(brand, model, hp, color, type) {
    ((this.brand = brand),
      (this.model = model),
      (this.hp = hp),
      (this.color = color),
      (this.type = type));
  }
}

const BMW = new Car("BMW", "M3", "580", "BLACK", "SEDAN");

console.log({ BMW });
