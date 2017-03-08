# -*- coding: utf-8 -*-
import os
import sys
import time
import traceback

from jinja2 import FileSystemLoader, Environment
from jinja2.ext import Extension
import re

OLD_SUM = 0

class RelativeInclude(Extension):
    tags = set(['include2'])

    def __init__(self, environment):
        super(RelativeInclude, self).__init__(environment)
        self.matcher = re.compile("\.*")

    def parse(self, parser):
        node = parser.parse_include()
        template = node.template.as_const()
        if template.startswith("."):
            up = len(self.matcher.match(template).group())
            seq = parser.name.split("/")[:-up]
            seq.extend(template.split("/")[1:])
            template = "/".join(seq)
            node.template.value = template
        return node

def render_from_template(directory, template_name, **kwargs):
    loader = FileSystemLoader(directory)
    env = Environment(loader=loader, extensions=[RelativeInclude])
    template = env.get_template(template_name)
    return template.render(**kwargs)

def write_file():
    with open("index.html", "wb") as f:
        template = render_from_template("template", "index.html")
        f.write(template.encode('utf8'))

def check():
    global OLD_SUM
    m_time_list = []
    for root, dirs, files in os.walk("template"):
        m_time_list += [
            os.stat(os.path.join(root, f)).st_mtime for f in files
        ]
    new_sum = sum(m_time_list)
    if new_sum != OLD_SUM:
        print("Atualizando index.html")
        try:
            write_file()
        except:
            traceback.print_exc()
        OLD_SUM = new_sum


if __name__ == "__main__":
    if sys.argv[-1] == "-t":
        while True:
            check()
            time.sleep(1)
    else:
        write_file()


