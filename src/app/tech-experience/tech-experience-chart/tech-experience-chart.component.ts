import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-tech-experience-chart',
  templateUrl: './tech-experience-chart.component.html',
  styleUrls: ['./tech-experience-chart.component.scss']
})
export class TechExperienceChartComponent implements OnInit {

  techExperience = [
    {
      "name": "Top Level",
      "children": [
        {
          "name": "Product Management",
          "children": [{
            "name": "Waterfall"
          },
          {
            "name": "Agile",
            "children": [{
              "name": "Scrum",
              "children": [{
                "name": "Daily Standup"
              },
              {
                "name": "Sprint Planning"
              },
              {
                "name": "Product Backlog Refinement"
              },
              {
                "name": "Sprint Review"
              },
              {
                "name": "Sprint Retrospective"
              },
              ]
            }]
          }

          ]
        },
        {
          "name": "Frontend",
          "children": [{
            "name": "HTML",
            "children": [{
              "name": "HTML5"
            }]
          },
          {
            "name": "CSS",
            "children": [{
              "name": "CSS3"
            },
            {
              "name": "CSS Frameworks",
              "children": [{
                "name": "Bootstrap"
              },]
            }
            ]
          },
          {
            "name": "JavaScript",
            "children": [{
              "name": "ES5/6"
            },
            {
              "name": "JavaScript Frameworks",
              "children": [{
                "name": "jQuery"
              },
              {
                "name": "Angular"
              },
              {
                "name": "React*"
              },
              {
                "name": "SAPUI5"
              }
              ]
            },
            ]
          },
          {
            "name": "Preprocessors",
            "children": [{
              "name": "SASS"
            },
            {
              "name": "LESS"
            }
            ]
          },
          {
            "name": "Dependency Management",
            "children": [{
              "name": "Bower"
            },
            {
              "name": "NPM"
            },
            ]
          }
          ]
        },
        {
          "name": "Backend",
          "children": [{
            "name": "Scripting Languages",
            "children": [{
              "name": "Node.js"
            }]
          },
          {
            "name": "Data",
            "children": [{
              "name": "MongoDB"
            },
            {
              "name": "SQL*"
            }
            ]
          }
          ]
        },
        {
          "name": "Version Control",
          "children": [{
            "name": "Git"
          },
          {
            "name": "Github"
          },
          {
            "name": "Bitbucket"
          }
          ]
        },
        {
          "name": "Build Tools",
          "children": [{
            "name": "Task Runners",
            "children": [{
              "name": "Grunt"
            },
            {
              "name": "Gulp"
            }
            ]
          },
          {
            "name": "AWS Code Deploy"
          },
          {
            "name": "TFS Build"
          },
          {
            "name": "Jenkins"
          }

          ]
        },
        {
          "name": "Testing",
          "children": [{
            "name": "Unit",
            "children": [{
              "name": "qUnit"
            },
            {
              "name": "Jasmine"
            }
            ]
          },
          {
            "name": "End-to-End",
            "children": [{
              "name": "Protractor"
            },
            {
              "name": "NightWatch"
            }
            ]
          }

          ]
        },
      ]
    }
  ];

  ngOnInit() {
    this.generateTreeDiagram();
  }

  generateTreeDiagram() {
    const margin = { top: 20, right: 120, bottom: 20, left: 120 },
      width = window.innerWidth / 2 - margin.right - margin.left,
      height = 800;

    let i = 0,
      duration = 750,
      root;

    const tree = d3.layout.tree()
      .size([height, width]);

    const diagonal = d3.svg.diagonal()
      .projection((d) => { return [d.y, d.x]; });

    const svg = d3.select(".tech-experience--chart").append("svg")
      .attr("width", '100%')
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    root = this.techExperience[0];
    root.x0 = height / 2;
    root.y0 = 0;

    update(root);

    d3.select(self.frameElement).style("height", "500px");

    function update(source) {

      // Compute the new tree layout.
      const nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

      // Normalize for fixed-depth.
      nodes.forEach(d => d.y = d.depth * 180);

      // Update the nodes…
      const node = svg.selectAll("g.node")
        .data(nodes, (d: any) => d.id || (d.id = ++i));

      // Enter any new nodes at the parent's previous position.
      const nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", (d) => "translate(" + source.y0 + "," + source.x0 + ")")
        .on("click", click);

      nodeEnter.append("circle")
        .attr("r", 1e-6)
        .style("fill", d => d._children ? "indianred" : "darkgray");

      nodeEnter.append("text")
        .attr("x", d => d.children || d._children ? -13 : 13)
        .attr("dy", ".35em")
        .attr("text-anchor", d => d.children || d._children ? "end" : "start")
        .text(d => d.name)
        .style("fill-opacity", 1e-6);

      // Transition nodes to their new position.
      const nodeUpdate = node.transition()
        .duration(duration)
        .attr("transform", d => "translate(" + d.y + "," + d.x + ")");

      nodeUpdate.select("circle")
        .attr("r", 6)
        .style("fill", d => d._children ? "indianred" : "darkgray");

      nodeUpdate.select("text")
        .style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      const nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", d => "translate(" + source.y + "," + source.x + ")")
        .remove();

      nodeExit.select("circle")
        .attr("r", 1e-6);

      nodeExit.select("text")
        .style("fill-opacity", 1e-6);

      // Update the links…
      const link = svg.selectAll("path.link")
        .data(links, (d: any) => d.target.id);

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", d => {
          const o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr("d", diagonal)
        .attr("d", d => {
          /* calculating the top shift */
          const source = { x: d.source.x, y: d.source.y };
          const target = { x: d.target.x, y: d.target.y };
          return diagonal({ source: source, target: target });
        });

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr("d", d => {
          const o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach((d: any) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }

  }

}
