import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    this.addHook('beforeSave', async user => {
      console.log(user, 'BEFORE-SAVE');
      if (user.password && !user.password_hash) {
        console.log('password_hash not provided');
        user.password_hash = user.password;
      }
      if (user.password_hash) {
        const hashedPass = await bcrypt.hash(user.password_hash, 8);
        user.password_hash = hashedPass;
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
