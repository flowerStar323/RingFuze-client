import mock from "../mock"
const data = {
  accountSetting: {
    general: {
      avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
      username: "Patches",
      fullName: "Richard Hendricks",
      email: "r.hendricks@piedpiper.com",
      company: "Pied Piper",
      dob: "03/10/1988",
      website: "www.piedpiper.com",
      phone: 8005256397
    },
    address: {
      address: "5230 Newell Road",
      city: "Palo Alto",
      state: "CA",
      postal: "94303",
      country: "USA"
    },
    social: {
      socialLinks: {
        twitter: "",
        facebook: "",
        google: "",
        linkedIn: "",
        instagram: "",
        quora: ""
      },
      connections: {
        twitter: {
          profileImg: require("@src/assets/images/avatars/11-small.png")
            .default,
          id: "johndoe"
        },
        google: {
          profileImg: require("@src/assets/images/avatars/3-small.png").default,
          id: "luraweber"
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      answerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
}

mock.onGet("/account-setting/data").reply(() => [200, data.accountSetting])
