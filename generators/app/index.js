import Generator from 'yeoman-generator';

export default class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: '项目名称:',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: '项目描述:',
        default: 'React 移动端应用'
      },
      {
        type: 'input',
        name: 'author',
        message: '作者:',
        default: ''
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(),
      {
        name: this.answers.name,
        description: this.answers.description,
        author: this.answers.author
      },
      {},
      { globOptions: { dot: true } }
    );

    const pkgJson = {
      name: this.answers.name,
      version: '0.1.0',
      description: this.answers.description,
      author: this.answers.author,
      private: true
    };

    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.spawnCommand('pnpm', ['install']);
  }

  end() {
    this.log('\n🎉 项目创建完成！\n');
    this.log('接下来你可以：');
    this.log(`  cd ${this.answers.name}`);
    this.log('  pnpm dev\n');
  }
};
