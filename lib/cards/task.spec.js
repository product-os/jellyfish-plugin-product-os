const {
  describe,
  expect,
  test
} = require('@jest/globals')
const task = require('./task')

// TODO: adapt task schema to actually match these examples

// states: unassigned, assigned, accepted, failed, uploading, success

// TBC: we probably should NOT create the output contract directly, but only update the task with a result.
//      otherwise there is an additional failure mode when the runner dies between contract update and task update

const examples = [
  {
    name: 'unassigned task',
    slug: 'task-testing',
    type: 'task@1.0.0',
    data: {
      worker: null,
      result: null,
      status: 'unassigned',
      actor: 'actor-slug',
      input: {
        name: 'some service source',
        slug: 'service-source-some-service',
        type: 'service-source@1.0.0',
        data: {
          artifactReady: true
        }
      },
      transformer: {
        name: 'service source 2 service image transformer',
        slug: 'transformer-source-to-image',
        type: 'transformer@1.0.0',
        data: {
          image: {
            name: 'the-registry.com/transformer:1.2'
          }
          // there are also triggers and requirements, but they shouldn't matter in a task
        }
      }
    }
  },
  {
    name: 'assigned idle task',
    slug: 'test-task',
    type: 'task@1.0.0',
    data: {
      worker: 'worker-test-worker-slug',
      result: null,
      status: 'assigned',
      actor: 'actor-slug',
      input: {
        name: 'some service source',
        slug: 'service-source-some-service',
        type: 'service-source@1.0.0',
        data: {
          artifactReady: true
        }
      },
      transformer: {
        name: 'service source 2 service image transformer',
        slug: 'transformer-source-to-image',
        type: 'transformer@1.0.0',
        data: {
          image: {
            name: 'the-registry.com/transformer:1.2'
          }
          // there are also triggers and requirements, but they shouldn't matter in a task
        }
      }
    }
  },
  {
    name: 'failed task',
    slug: 'test-task',
    type: 'task@1.0.0',
    data: {
      worker: 'worker-test-worker-slug',
      result: {
        failureReason: 'disk-full'
      },
      status: 'failed',
      actor: 'actor-slug',
      input: {
        name: 'some service source',
        slug: 'service-source-some-service',
        type: 'service-source@1.0.0',
        data: {
          artifactReady: true
        }
      },
      transformer: {
        name: 'service source 2 service image transformer',
        slug: 'transformer-source-to-image',
        type: 'transformer@1.0.0',
        data: {
          image: {
            name: 'the-registry.com/transformer:1.2'
          }
          // there are also triggers and requirements, but they shouldn't matter in a task
        }
      }
    }
  },
  {
    name: 'succeeded task before uploading artifact',
    slug: 'test-task',
    type: 'task@1.0.0',
    data: {
      worker: 'worker-test-worker-slug',
      result: {
        name: 'service image of some service',
        // slug: 'test-task', // may be auto-generated
        type: 'service-image@1.0.0',
        data: {
          servicePort: 8080,
          artifactReady: false
        }
      },
      status: 'uploading',
      actor: 'actor-slug',
      input: {
        name: 'some service source',
        slug: 'service-source-some-service',
        type: 'service-source@1.0.0',
        data: {
          artifactReady: true
        }
      },
      transformer: {
        name: 'service source 2 service image transformer',
        slug: 'transformer-source-to-image',
        type: 'transformer@1.0.0',
        data: {
          image: {
            name: 'the-registry.com/transformer:1.2'
          }
          // there are also triggers and requirements, but they shouldn't matter in a task
        }
      }
    }
  },
  {
    name: 'succeeded task after uploading artifact',
    slug: 'test-task',
    type: 'task@1.0.0',
    data: {
      worker: 'worker-test-worker-slug',
      result: {
        name: 'service image of some service',
        // slug: 'test-task', // may be auto-generated
        type: 'service-image@1.0.0',
        data: {
          servicePort: 8080,
          artifactReady: true
        }
      },
      status: 'success',
      actor: 'actor-slug',
      input: {
        name: 'some service source',
        slug: 'service-source-some-service',
        type: 'service-source@1.0.0',
        data: {
          artifactReady: true
        }
      },
      transformer: {
        name: 'service source 2 service image transformer',
        slug: 'transformer-source-to-image',
        type: 'transformer@1.0.0',
        data: {
          image: {
            name: 'the-registry.com/transformer:1.2'
          }
          // there are also triggers and requirements, but they shouldn't matter in a task
        }
      }
    }
  }
]

// TODO replace with a real implementation
const schemaMatch = (schema, data) => {
  return false && schema !== data
}

describe('Expected task examples to match schema', () => {
  for (const example of examples) {
    test(example.name, () => {
      expect(schemaMatch(task.data.schema, example)).toBeTruthy()
    })
  }
})
